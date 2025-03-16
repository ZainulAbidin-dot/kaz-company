import { ReactNode, useId, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import 'leaflet/dist/leaflet.css';
import { MailPlusIcon, MapPinPlus, PhoneCallIcon } from 'lucide-react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Wrapper } from '@/components/ui/wrapper';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';
import { cn } from '@/lib/utils';

const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().refine(
    (val) => {
      if (!val) return true; // Optional field
      return /^\+?\d{10,20}$/.test(val);
    },
    {
      message:
        'Invalid phone number. Must be between 10-20 digits, can start with +',
    }
  ),
  message: z.string().min(1, { message: 'Message is required' }),
});

type TContactForm = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  return (
    <section className="py-20">
      <Wrapper>
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <ContactInfo />
          </div>
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

function ContactInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useFadeInAnimation({
    animationClass: 'animate-fadeInLeft',
    threshold: 0.25,
  });
  return (
    <div ref={sectionRef} data-animatable>
      <h2 className="text-3xl font-bold lg:text-5xl">
        Ready to Connect With Us?
      </h2>
      <p className="text-muted-foreground mt-4 text-lg">
        We would love to hear from you! Whether you have a question about our
        services, pricing, or anything else, our team is ready to answer all
        your questions.
      </p>
      <div className="mt-6 flex flex-col gap-1">
        <a
          className="flex items-center gap-4 rounded-lg px-4 py-2 transition-colors hover:bg-neutral-50"
          href="tel:+1234567890"
        >
          <div className="inline-flex size-14 items-center justify-center rounded-full bg-neutral-50 p-4">
            <PhoneCallIcon className="text-neutral-600" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-neutral-900">
              Call us anytime
            </h3>
            <span className="text-lg text-neutral-600">+123 456 7890</span>
          </div>
        </a>

        <a
          className="flex items-center gap-4 rounded-lg px-4 py-2 transition-colors hover:bg-neutral-50"
          href="mailto:info@example.com"
        >
          <div className="inline-flex size-14 items-center justify-center rounded-full bg-neutral-50 p-4">
            <MailPlusIcon className="text-neutral-600" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-neutral-900">Email us</h3>
            <span className="text-lg text-neutral-600">info@example.com</span>
          </div>
        </a>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <button className="flex cursor-pointer items-center gap-4 rounded-lg px-4 py-2 transition-colors hover:bg-neutral-50">
              <div className="inline-flex size-14 items-center justify-center rounded-full bg-neutral-100 p-4">
                <MapPinPlus className="text-neutral-600" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Visit our office
                </h3>
                <span className="text-neutral-600">View on map</span>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent>
            <h2 className="mb-4 text-xl font-bold">Our Location</h2>
            <div className="h-64 w-full">
              <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>Our Office Location</Popup>
                </Marker>
              </MapContainer>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function ContactForm() {
  const form = useForm<TContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  const sectioRef = useFadeInAnimation({
    animationClass: 'animate-fadeInRight',
    threshold: 0.25,
  });

  const onSubmit = (data: TContactForm) => {
    console.log(data);
  };

  return (
    <div ref={sectioRef} data-animatable>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 rounded-xl bg-white p-8 shadow-lg"
        >
          <h3 className="mb-6 text-2xl font-semibold text-neutral-800">
            Send us a Message
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            <InputField<TContactForm>
              label="Full Name"
              name="name"
              type="text"
              placeholder="John Doe"
            />

            <InputField<TContactForm>
              label="Email Address"
              name="email"
              type="email"
              placeholder="john@example.com"
            />
          </div>

          <InputField<TContactForm>
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            isOptional
          />

          <InputField<TContactForm>
            label="Your Message"
            name="message"
            type="textarea"
            placeholder="How can we help you?"
          />

          <Button type="submit" className="w-full py-6 text-lg font-medium">
            Send Message
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}

type InputFieldProps<S> = {
  label: string;
  name: keyof S & string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
  isOptional?: boolean;
};

function InputField<S>({
  label,
  name,
  type,
  placeholder,
  isOptional = false,
}: InputFieldProps<S>) {
  const id = useId();
  const { register, formState } = useFormContext();
  const error = formState.errors[name];
  const formRegisterReturn = register(name);

  let field: ReactNode = null;

  if (type === 'textarea') {
    field = (
      <Textarea
        id={id}
        placeholder={placeholder}
        {...formRegisterReturn}
        className={cn(
          'min-h-24 resize-y transition-all duration-200',
          error ? 'border-red-500 ring-red-200' : 'hover:border-neutral-400'
        )}
      />
    );
  } else {
    field = (
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...formRegisterReturn}
        className={cn(
          'transition-all duration-200',
          error ? 'border-red-500 ring-red-200' : 'hover:border-neutral-400'
        )}
      />
    );
  }

  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className={cn('text-sm font-medium text-neutral-700')}
      >
        {label} {isOptional ? '(Optional)' : ''}
      </Label>
      {field}
      {error ? (
        <p className="text-sm text-red-500">{error.message as string}</p>
      ) : null}
    </div>
  );
}
