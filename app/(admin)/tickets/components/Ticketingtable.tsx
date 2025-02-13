"use client";
import { ColumnDef, getPaginationRowModel } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Ticket } from "@/types";
import { parseStringify } from "@/lib/util";
import { useRouter } from "next/navigation";
import { deleteTicket } from "@/lib/actions/user/ticket.action";

type TicketsListParams = { tickets: Ticket[] };

const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

function TicketingTable({ tickets }: TicketsListParams) {
  const router = useRouter();
  const editItem = (itemID: string) => {
    console.log("Edited", itemID);

    const res = tickets.filter(
      (row) => row.name === parseStringify(itemID).name
    );

    if (!res || res.length === 0) return;
    router.push(`/tickets/${res[0].$id!}`);
  };
  const viewItem = (itemID: unknown) => {
    console.log("View  Item", itemID);
    const res = tickets.filter(
      (row) => row.name === parseStringify(itemID).name
    );

    if (!res || res.length === 0) return;
    router.push(`/item/${res[0].$id!}`);
  };
  const deleteItem = (itemID: string) => {
    console.log("Deleted Item:", itemID);
    const res = tickets.filter(
      (row) => row.name === parseStringify(itemID).name
    );

    if (!res || res.length === 0) return;
    deleteTicket(`${res[0].$id}`);
  };
  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={tickets}
        viewItem={viewItem}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}
// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[];
//   data: TData[];
// }

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  editItem: (term: string) => void;
  viewItem: (term: string) => void;
  deleteItem: (term: string) => void;
}

const DataTable = <TData, TValue>({
  columns,
  data,
  editItem,
  viewItem,
  deleteItem,
}: DataTableProps<TData, TValue>): React.JSX.Element => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
                <TableHead>Action</TableHead>
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}

                  <TableCell className=" flex gap-4">
                    <Button
                      className="bg-transparent border-transparent"
                      onClick={() => viewItem(parseStringify(row.original))}
                    >
                      <Image
                        src="/view.png"
                        alt="logo"
                        height={25}
                        width={20}
                      />
                    </Button>
                    <Button
                      className="bg-transparent border-transparent"
                      onClick={() => editItem(parseStringify(row.original))}
                    >
                      <Image
                        src="/edit.png"
                        alt="logo"
                        height={25}
                        width={20}
                      />
                    </Button>
                    <Button
                      className="bg-transparent border-transparent"
                      onClick={() => deleteItem(parseStringify(row.original))}
                    >
                      <Image
                        src="/delete.png"
                        alt="logo"
                        height={25}
                        width={20}
                      />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default TicketingTable;
