"use client";

import * as React from "react";
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { toast } from "react-toastify";

export type Event = {
  _id: string;
  name: string;
  description: string;
  region: string;
  city: string;
  skillLevel: string;
  startDate: string;
  endDate: string;
  location: string;
  numberOfVolunteer: number;
  eventPic: any;
  volunteers: any[];
};

export function JobPage() {
    const [events, setEvents] = React.useState<Event[]>([
        {
            _id: "1",
            name: "Beach Cleanup",
            description: "Join us for a beach cleanup event.",
            region: "West Coast",
            city: "Los Angeles",
            skillLevel: "Beginner",
            startDate: "2023-11-01",
            endDate: "2023-11-01",
            location: "Santa Monica Beach",
            numberOfVolunteer: 50,
            eventPic: "https://via.placeholder.com/150",
            volunteers: [],
        },
        {
            _id: "2",
            name: "Tree Planting",
            description: "Help us plant trees in the community park.",
            region: "Midwest",
            city: "Chicago",
            skillLevel: "Intermediate",
            startDate: "2023-11-10",
            endDate: "2023-11-10",
            location: "Lincoln Park",
            numberOfVolunteer: 30,
            eventPic: "https://via.placeholder.com/150",
            volunteers: [],
        },
        {
            _id: "3",
            name: "Food Drive",
            description: "Assist in organizing and distributing food to those in need.",
            region: "East Coast",
            city: "New York",
            skillLevel: "Advanced",
            startDate: "2023-11-15",
            endDate: "2023-11-15",
            location: "Brooklyn Community Center",
            numberOfVolunteer: 20,
            eventPic: "https://via.placeholder.com/150",
            volunteers: [],
        },
    ]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Fetch data from API
  React.useEffect(() => {
    // const fetchEvents = async () => {
    //   try {
    //     const response = await fetch("http://localhost:5000/admin/event/", {
    //       method: "GET",
    //       headers: {
    //         // Authorization: `Bearer ${user?.token}`,
    //         // Do NOT add "Content-Type": "multipart/form-data" (browser will set it automatically)
    //       },
    //     });
        
    //     if (!response.ok) throw new Error("Failed to fetch events");

    //     const data = await response.json();
    //     setEvents(data.data);
    //   } catch (error) {
    //     setError("Error fetching events.");
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchEvents();
  }, []);


  const columns: ColumnDef<Event>[] = [
    {
      accessorKey: "name",
      header: "Designation",
    },
    {
      accessorKey: "region",
      header: "Region",
    },
    {
      accessorKey: "city",
      header: "City",
    },
    {
      accessorKey: "skillLevel",
      header: "Skill Level",
      cell: ({ row }) => (
        <span className="capitalize">{row.getValue("skillLevel")}</span>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const event = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(event._id)}
              >
                Copy Job ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to={`/admin/view-event/${event._id}`}>
                  View Details
                </Link>
              </DropdownMenuItem>
              {/* <DropdownMenuItem>
                <Link to={`/admin/update-event/${event._id}`}>
                  Edit Event
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete(event._id)}>
                Delete Event
              </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: events,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-[90%] m-auto my-40">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl mt-4">Jobs</h1>
        <Link to="/admin/add-event">
          {/* <Button variant="default" className="mt-4">
            Add New Event
          </Button> */}
        </Link>
      </div>

      {loading && <p>Loading events...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter events..."
              value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No events found. {table.getRowModel().rows?.length}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
}
