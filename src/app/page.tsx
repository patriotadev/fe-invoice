'use client'

import Wrapper from "./components/layouts/Wrapper";
import Breadcrumb from "./components/shared/Breadcrumb";
import Card from "./components/shared/card/Card";
import Pagination from "./components/shared/Pagination";
import {
  Column,
  Table as ReactTable,
  PaginationState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  OnChangeFn,
  flexRender,
  createColumnHelper
} from '@tanstack/react-table'
import Table from "./components/shared/Table";

export default function Home() {

  const links = [
    {
      label: "Dashboard",
      url: "/"
    },
    {
      label: "Features",
      url: "/"
    },
  ];

  return (
    <Wrapper>
        <div className="mb-8">
          <Breadcrumb items={links} />
        </div>
        {/* <span className="loading loading-bars loading-lg bg-secondary"></span> */}

        <Card>
          <div className="w-full p-5">
            <div className="mb-2 flex justify-between flex-wrap">
                <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
                <h1 className="font-semibold">Summary</h1>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <hr/>
            <div className="my-4">
              Dashboard
            </div>
            <div className="flex justify-end">
            </div>
          </div>
        </Card>
    </Wrapper>
  )
}
