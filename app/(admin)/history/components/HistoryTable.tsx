"use client";
import React from "react";
// import Image from "next/image";
import { ColumnDef, getPaginationRowModel } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
// import { parseStringify } from "@/lib/util";
import { HistoryProps } from "@/types";
// import { useRouter } from "next/navigation";

type HistoryType = { history: HistoryProps[] };

const columns: ColumnDef<HistoryProps>[] = [
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
    accessorKey: "$id",
    header: "Ticket ID",
  },
  {
    accessorKey: "$createdAt",
    header: "Date",
  },
];

// export const history: HistoryType[] = [
//   {
//     id: "728ed52f",
//     name: "Bolato Dance",
//     type: "Sport",
//     price: 100,
//     date: "Mon 12 July 12:03 PM",
//     status: "Pending",
//   },
//   {
//     id: "7458ed52f",
//     name: "Davido Concert",
//     type: "Event",
//     price: 100,
//     date: "Mon 12 July 12:03 PM",
//     status: "Success",
//   },
//   // ...
// ];
function HistoryTable({ history }: HistoryType) {
  // const router = useRouter();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={history} />
    </div>
  );
}
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // const editItem = (itemID: string) => {
  //   console.log("Edited", itemID);
  // };
  // const viewItem = (itemID: unknown) => {
  //   console.log("View  Item", itemID);
  //   console.log(
  //     "Current View  Item",
  //     history.filter((row) => row.id !== parseStringify(itemID).id)
  //   );
  // };
  // const deleteItem = (itemID: string) => {
  //   console.log("Deleted Item:", itemID);
  // };
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
                {/* <TableHead>Action</TableHead> */}
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
                  {/* <TableCell className=" flex gap-4">
                    <Button
                      className="bg-transparent border-transparent"
                      // onClick={() => viewItem(row.original)}
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
                      // onClick={() => editItem(row.id)}
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
                      // onClick={() => deleteItem(row.id)}
                    >
                      <Image
                        src="/delete.png"
                        alt="logo"
                        height={25}
                        width={20}
                      />
                    </Button>
                  </TableCell> */}
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
}

export default HistoryTable;
