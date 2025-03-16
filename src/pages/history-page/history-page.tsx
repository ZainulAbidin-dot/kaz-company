import careers_img from '@/assets/images/career_img_3.jpg';
import { Card } from '@/components/ui/card';
import { useFadeInAnimation } from '@/hooks/use-fadein-animation';
import { useIsMobile } from '@/hooks/use-is-mobile';
import { cn } from '@/lib/utils';

const events = [
  {
    title: '1997',
    cardTitle: 'Company Foundation',
    cardSubtitle: 'Founded by Engr. Abdulrahman Alshathry in KSA',
    cardDetailedText:
      'Saudi Controls was established in KSA with a vision to become a leading provider of industrial automation and control systems in the Kingdom of Saudi Arabia.',
  },
  {
    title: '1997',
    cardTitle: 'Partnership with JCI',
    cardSubtitle: 'Took over JCI operations in KSA',
    cardDetailedText:
      'SCL started its partnership with Johnson Controls International and took over the operation form of JCI in KSA.',
  },
  {
    title: '1997',
    cardTitle: 'Major CCMS Projects Completion',
    cardSubtitle: 'King Fahad International Airport & Peace Shield Project',
    cardDetailedText:
      'SCL successfully completed and handed over two major CCMS projects: King Fahad International Airport and the Peace Shield Project.',
  },
  {
    title: '1998',
    cardTitle: 'Expansion to Eastern Province',
    cardSubtitle: 'Established branch office in Al Khobar',
    cardDetailedText:
      'SCL expanded its presence by establishing a branch office in the Eastern Province - Al Khobar.',
  },
  {
    title: '1998',
    cardTitle: 'King Fahad Medical City BMS',
    cardSubtitle: 'Successful completion of BMS projects',
    cardDetailedText:
      'SCL completed and handed over the BMS projects for King Fahad Medical City.',
  },
  {
    title: '1999',
    cardTitle: 'Facility Management for Kingdom Holding',
    cardSubtitle: 'Implementation in Kingdom Hospital, Academy & Tower',
    cardDetailedText:
      'SCL signed an agreement with Kingdom Holding Company to supply and implement the facility management solution for Kingdom Hospital, Kingdom Academy, and Kingdom Tower.',
  },
  {
    title: '2000',
    cardTitle: 'SABIC-HQ BMS Project',
    cardSubtitle: 'Major contract with SABIC in Riyadh',
    cardDetailedText:
      'SCL secured a major contract to implement its BMS solution in SABIC-HQ Riyadh.',
  },
  {
    title: '2000',
    cardTitle: 'BMS Upgrade for ArRiyadh Development Authority',
    cardSubtitle: 'Major contract with ADA',
    cardDetailedText:
      'SCL secured a contract to upgrade and supply the BMS system for ADA-HQ, Cultural Palace, Tawiq Palace, ArRiyadh Main Court, and ArRiyadh Transportation Center.',
  },
  {
    title: '2001',
    cardTitle: 'Aramco Building BMS Implementation',
    cardSubtitle: 'BMS for major Aramco facilities',
    cardDetailedText:
      'SCL became the major BMS supplier for Aramco buildings, including Area Core Annex Building, North Park, East Park, West Park, and Hawiya Gas Plant.',
  },
  {
    title: '2002',
    cardTitle: 'Saudi Arabia National Guard Contract',
    cardSubtitle: 'Major contract with SANG',
    cardDetailedText:
      'SCL secured a significant contract with the Saudi Arabian National Guard (SANG).',
  },
  {
    title: '2003',
    cardTitle: 'Umm Al-Qura University BMS Project',
    cardSubtitle: 'Completion of a 7-phase project',
    cardDetailedText:
      'SCL successfully completed and handed over 7 phases of the Umm Al-Qura University BMS project.',
  },
  {
    title: '2004',
    cardTitle: 'Security Forces Hospital BMS Upgrade',
    cardSubtitle: 'Major contract with MOI',
    cardDetailedText:
      'SCL secured a contract with the Ministry of Interior (MOI) to upgrade the BMS of the Security Forces Hospital in Riyadh.',
  },
  {
    title: '2004',
    cardTitle: 'Granda Shopping Mall BMS Implementation',
    cardSubtitle: 'Major contract with GOSI',
    cardDetailedText:
      'SCL secured a contract with GOSI to supply the BMS and metering systems for Granda Shopping Mall in Riyadh.',
  },
  {
    title: '2005',
    cardTitle: 'Five star Hotel- Sanaa-Yamen',
    cardSubtitle: 'Major contract with Five star Hotel- Sanaa-Yamen',
    cardDetailedText:
      'SCL secured a contract to implement and integrated Low Gurrent (BMS,RMS,FAS, PA,ACS, CCTV, intercom and Lighting Control) system of Five star Hotel- Sanaa-Yamen',
  },
  {
    title: '2006',
    cardTitle: 'Prestigious Aramco LAB R&D Project',
    cardSubtitle: 'Executed BMS for Dhahran City Lab',
    cardDetailedText:
      'SCL executed one of the most prestigious BMS projects in Dhahran City (Aramco) LAB R&D.',
  },
  {
    title: '2006',
    cardTitle: 'National Guard military cities',
    cardSubtitle: 'Automatic Control system makor contract',
    cardDetailedText:
      'SCL ploneered the use of Automatic Control system for a project to supply and distribute the water of two National Guard military cities, Dirab and Kashm AlAan.',
  },
  {
    title: '2006',
    cardTitle: 'THALES Group and Distech Controls',
    cardSubtitle: 'Partnership with THALES Group and Distech Controls',
    cardDetailedText:
      'SCL successfully signed a partnership agrement with THALES Group and Distech Controls.',
  },
  {
    title: '2007',
    cardTitle: 'King Khalid International Airport',
    cardSubtitle: 'Control and Monitoring System',
    cardDetailedText:
      'SCL Secured a contract for control and Monitoring System upgrade/replacement project at King Khalid International Airport.',
  },
  {
    title: '2007',
    cardTitle: 'King Khalid Road Tunnel Ventilation System',
    cardSubtitle: 'Automated control system implementation',
    cardDetailedText:
      'SCL pioneered the use of an automatic control system for tunnel ventilation at King Khalid Road, Makkah.',
  },
  {
    title: '2008',
    cardTitle: 'Saudi Arabian Monetary Agency',
    cardSubtitle: 'Major contract with SAMA-HQ-Riyadh',
    cardDetailedText:
      'SCL Secured a major contract with Saudi Arabian Monetary Agency to upgrade the BMS of SAMA-HQ-Riyadh.',
  },
  {
    title: '2008',
    cardTitle: 'Government Project Completion',
    cardSubtitle: 'Highly classified project handover',
    cardDetailedText:
      'SCL successfully completed and handed over a highly classified project for government agencies.',
  },
  {
    title: '2009',
    cardTitle: 'Smart Building Design for Saudi Embassy in Cairo',
    cardSubtitle: 'Consultant for Smart Building applications',
    cardDetailedText:
      'SCL was nominated as a consultant to design the Smart Building application for the Saudi Arabian Embassy in Cairo.',
  },
  {
    title: '2009',
    cardTitle: 'Smart Building application for Ministry of Foreign Affair',
    cardSubtitle: 'Consultant for Smart Building applications',
    cardDetailedText:
      'SCL proudly announced the first implemented Smart Building application for Ministry of Foreign Affair - HQ - Riyadh',
  },
  {
    title: '2010',
    cardTitle: 'Mission-Critical Support System Upgrade for RSAF',
    cardSubtitle: 'Upgrading mission systems across 4 airbases',
    cardDetailedText:
      'SCL secured a major contract with the Royal Saudi Air Force (RSAF) to upgrade critical mission and ground crew support systems across 4 airbases.',
  },
  {
    title: '2010',
    cardTitle: 'Ministry of Foreign Affair - Embassies',
    cardSubtitle: 'SGL facility Management system',
    cardDetailedText:
      'SCL proudly announced the use of SGL facility Management system template (CRITERIA & SPECS) for Ministry of Foreign Affair - Embassies.',
  },
  {
    title: '2011',
    cardTitle: 'BOSCH RTS',
    cardSubtitle: 'Partnership with BOSCH RTS',
    cardDetailedText:
      'SCL Successfully signed a partnership agreement with BOSCH RTS.',
  },
  {
    title: '2011',
    cardTitle: 'GE Automation',
    cardSubtitle: 'Partnership with GE Automation',
    cardDetailedText:
      'SCL Successfully signed a partnership agreement with GE Automation.',
  },
  {
    title: '2012',
    cardTitle: 'MOFA-HQ',
    cardSubtitle: 'Major contract with Ministry of Foreign affair',
    cardDetailedText:
      'SCL Secured a major contract with Ministry of Foreign affair (MOFA) to supply an implement the RAD technology at MOFA-HQ',
  },
  {
    title: '2013',
    cardTitle: 'Celebration of 300 Successful Projects',
    cardSubtitle: '300+ project completion milestone',
    cardDetailedText:
      'SCL celebrated the successful completion and handover of over 300 projects.',
  },{
    title: '2013',
    cardTitle: 'Partnership with GE Automation',
    cardSubtitle: 'Strategic partnership agreement signed',
    cardDetailedText:
      'SCL successfully signed a partnership agreement with GE Automation, enhancing its expertise in industrial automation solutions.',
  },
  {
    title: '2013',
    cardTitle: 'MOI Video Conferencing System',
    cardSubtitle: 'High-security telepresence project in Riyadh',
    cardDetailedText:
      'SCL secured a major contract with the Ministry of Interior (MOI) to supply and implement a video conferencing system (telepresence) for a highly classified project in Riyadh.',
  },
  {
    title: '2014',
    cardTitle: 'RSAF Fault Signaling System & IT LAN',
    cardSubtitle: 'Critical infrastructure for Typhoon program',
    cardDetailedText:
      'SCL secured a major contract with the Royal Saudi Air Force (RSAF) to supply and implement a Fault Signaling System and IT LAN at Taif Airbase to support the Typhoon program.',
  },
  {
    title: '2014',
    cardTitle: 'Industrial Partnership with THALES Group',
    cardSubtitle: 'Strengthening global collaborations',
    cardDetailedText:
      'SCL became a key industrial partner for THALES Group, reinforcing its capabilities in security and defense systems.',
  },
  {
    title: '2014',
    cardTitle: 'BMS for LAND FORCES HQ',
    cardSubtitle: 'Major contract with MODA',
    cardDetailedText:
      'SCL secured a significant contract with the Ministry of Defense and Aviation (MODA) to supply and implement a Building Management System (BMS) for the LAND FORCES HQ.',
  },
  {
    title: '2014',
    cardTitle: 'BMS for Ministry of Education',
    cardSubtitle: 'Smart infrastructure implementation',
    cardDetailedText:
      'SCL secured a major contract with the Ministry of Education (MOE) to supply and implement a BMS at the MOE headquarters.',
  },
  {
    title: '2015',
    cardTitle: 'PTP Wireless Network',
    cardSubtitle: 'PTP Wireless Network',
    cardDetailedText:
      'SCL secured contract to design and build a PTP wireless network to connect all traffic Intersections with TMC to transmit video an telemetry signal from the intersections to the TMC.',
  },
  {
    title: '2015',
    cardTitle: 'BMS for MOI Security Facilities',
    cardSubtitle: 'Phase I of King Abdullah ibn Abdulaziz Project',
    cardDetailedText:
      'SCL secured a major contract with the Ministry of Interior (MOI) to supply and implement a BMS for King Abdullah ibn Abdulaziz’s project to develop security facilities for MOI, Phase I.',
  },
  {
    title: '2015',
    cardTitle: 'Advanced Traffic Control System for Riyadh',
    cardSubtitle: 'Major project with ArRiyadh Development Authority',
    cardDetailedText:
      'SCL, in partnership with Transcore, secured a major project to design and build an Advanced Traffic Control System (ATCS) covering over 350 intersections in Riyadh.',
  },
  {
    title: '2016',
    cardTitle: 'Royal Saudi Air Force',
    cardSubtitle: 'Major contract with Royal Saudi Air Force',
    cardDetailedText:
      'SCL secured a major contract with Royal saudi Air Force (RSAF) to supply an Implement fault signalling system, at Taif Airbase for Schedule Maintenance & Upgrade (SMU).',
  },
  {
    title: '2016',
    cardTitle: 'Distech Controls',
    cardSubtitle: 'Sole agent for Distech controls',
    cardDetailedText:
      'SCL became the sole agent for Distech controls in KSA.',
  },
  {
    title: '2016',
    cardTitle: 'ATCS project',
    cardSubtitle: 'ATCS project',
    cardDetailedText:
      'SCL secured a contract to supply more than 1500 FLIR VDU camera along with necessary accessories for the ATCS project in Riyadh.',
  },
  {
    title: '2017',
    cardTitle: 'Strategic Partnerships',
    cardSubtitle: 'Collaborations with L&T and AT&T',
    cardDetailedText:
      'SCL signed a strategic partnership with Larson and Touber (L&T) Electrical and Automation Saudi Arabia Co. Ltd. and a separate partnership with AT&T Cabling.',
  },
  {
    title: '2018',
    cardTitle: 'MOI Security Headquarters Development',
    cardSubtitle: 'BMS for King Abdullah bin Abdulaziz Project',
    cardDetailedText:
      'Signed a major contract with the Ministry of Interior to supply a Building Management System for the King Abdullah bin Abdulaziz Project, aimed at developing MOI security headquarters.',
  },
  {
    title: '2019',
    cardTitle: 'Fire Detection System for MOI',
    cardSubtitle: 'Proof of Concept (POC) implementation',
    cardDetailedText:
      'Completed the Proof of Concept (POC) project for the central fire detection system for the Security Capacity Agency of the Ministry of Interior.',
  },
  {
    title: '2019',
    cardTitle: 'Smart Traffic Systems in Makkah',
    cardSubtitle: 'Project with Makkah City Development Authority',
    cardDetailedText:
      'SCL signed a contract to implement a smart traffic systems project in partnership with the Electronic High Technology Company for Makkah City Development Authority.',
  },
  {
    title: '2019',
    cardTitle: 'New Partnerships: Oriux and STCS',
    cardSubtitle: 'Expanding strategic alliances',
    cardDetailedText:
      'Signed a partnership agreement with Midign to represent Oriux in Saudi Arabia and another partnership with the Saudi Telecom Company (Solutions) STCS.',
  },
  {
    title: '2019',
    cardTitle: 'Engineering and THALES Partnership Renewal',
    cardSubtitle: 'Strengthening global collaborations',
    cardDetailedText:
      'Signed a partnership agreement with ST Engineering, a Singaporean company, for strategic projects and renewed SCL’s partnership with THALES Group in Saudi Arabia.',
  },
  {
    title: '2020',
    cardTitle: 'BMS for Radisson Blu Hotel',
    cardSubtitle: 'Major contract for building management system',
    cardDetailedText:
      'SCL signed a contract to supply a Building Management System for the Radisson Blu Hotel project at the Riyadh Chamber of Commerce exhibition grounds.',
  },
  {
    title: '2020',
    cardTitle: 'BMS for American Embassy in Riyadh',
    cardSubtitle: 'Smart infrastructure implementation',
    cardDetailedText:
      'Signed a contract to develop a Building Management System at the American Embassy building in Riyadh.',
  },
  {
    title: '2020',
    cardTitle: 'BMS for Ministry of Education - Phase II',
    cardSubtitle: 'Infrastructure expansion',
    cardDetailedText:
      'Signed a major contract with the Ministry of Education to supply the Building Management System at the Ministry’s headquarters - Phase II.',
  },
  {
    title: '2020',
    cardTitle: 'Technology & Industrial Partnerships',
    cardSubtitle: 'Agreements with Tech Control, Emerson, and Baker Hughes',
    cardDetailedText:
      'Signed partnerships with Technology Control Company, EMERSON Industrial Control Systems, and BAKER & HUGHES for power generation, oil, and gas management systems.',
  },
  {
    title: '2021',
    cardTitle: 'RSAF Perimeter Intrusion Detection System',
    cardSubtitle: 'Security enhancement for King Faisal Air Academy',
    cardDetailedText:
      'SCL and NAS joint venture secured a project with RSAF to design, supply, install, and commission a Perimeter Intrusion Detection System at King Faisal Air Academy.',
  },
  {
    title: '2021',
    cardTitle: 'RSAF BMS System for 71 Buildings',
    cardSubtitle: 'BMS contract at King Faisal Air Academy',
    cardDetailedText:
      'SCL and BSS venture secured a project with RSAF to design, supply, install, and commission a BMS System for 71 buildings at King Faisal Air Academy.',
  },
  {
    title: '2022',
    cardTitle: 'RSAF BMS System for 11 Buildings',
    cardSubtitle: 'Another expansion at King Faisal Air Academy',
    cardDetailedText:
      'SCL and NAS venture secured a project with RSAF to design, supply, install, and commission a BMS System for 11 buildings at King Faisal Air Academy.',
  },
  {
    title: '2022',
    cardTitle: 'DGDA Smart Infrastructure',
    cardSubtitle: '50 RTUs and SCADA System',
    cardDetailedText:
      'SCL secured projects with the Diriyah Gate Development Authority (DGDA) to design, supply, install, and commission 50 RTUs and SCADA System & an Advanced Traffic Control System.',
  },
  {
    title: '2023',
    cardTitle: 'RSAF Perimeter Intrusion Detection System',
    cardSubtitle: 'Security upgrade at King Salman Air Base',
    cardDetailedText:
      'SCL and NAS joint venture secured a project with RSAF to design, supply, install, and commission a Perimeter Intrusion Detection System at King Salman Air Base.',
  },
  {
    title: '2023',
    cardTitle: 'Security Gate Access Control System for RSAF',
    cardSubtitle: 'Major contract for RSAF',
    cardDetailedText:
      'The Royal Saudi Air Force awarded a project to SCL & NAS JV to implement a security gate access control system.',
  },
  {
    title: '2023',
    cardTitle: 'RSAF Atmosphere Detection Devices',
    cardSubtitle: 'Advanced safety measures',
    cardDetailedText:
      'SCL secured a project with the Royal Saudi Air Force to design, supply, install, and commission Atmosphere Detection Devices.',
  },
];


export function HistoryPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-20">
        <img src={careers_img} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 h-full w-full bg-black opacity-75" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <h1 className="my-8 text-center !text-3xl font-bold text-white md:!text-5xl">
          Saudi Controls History
        </h1>
        <HistoryTimeline />
      </div>
    </div>
  );
}

function HistoryTimeline() {
  return (
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-4 w-1 bg-black md:left-1/2 md:-translate-x-1/2" />
      {events.map((event, index) => (
        <div
          key={index}
          className={cn(
            'mb-8 flex items-start gap-4 md:items-center md:gap-0',
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          )}
        >
          <div
            className={cn(
              'relative h-6 w-6 flex-shrink-0 rounded-full bg-black',
              'translate-x-1/4 md:translate-x-0',
              index % 2 === 0
                ? 'md:left-1/2 md:-translate-x-1/2'
                : 'md:right-1/2 md:translate-x-1/2'
            )}
          />

          {/* Spacer for desktop layout */}
          <div className="hidden md:block md:w-1/2" />

          {/* Card */}
          <HistoryTimelineCard event={event} index={index} />
        </div>
      ))}
    </div>
  );
}

function HistoryTimelineCard({
  event,
  index,
}: {
  event: (typeof events)[number];
  index: number;
}) {
  const { isMobile } = useIsMobile();

  const animationClass =
    index % 2 !== 0 || isMobile ? 'animate-fadeInRight' : 'animate-fadeInLeft';

  const cardRef = useFadeInAnimation({
    animationClass,
    threshold: 0.5,
    delay: 200 * index,
  });

  return (
    <div className="flex-1 md:w-1/2" ref={cardRef} data-animatable>
      <Card className="border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] p-4 backdrop-blur-md md:p-6">
        <div className="text-white">
          <div className="mb-2 text-sm">{event.title}</div>
          <h3 className="mb-2 text-xl font-bold">{event.cardTitle}</h3>
          <h4 className="mb-2 text-lg">{event.cardSubtitle}</h4>
          <p className="text-sm">{event.cardDetailedText}</p>
        </div>
      </Card>
    </div>
  );
}
