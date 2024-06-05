'use client'

import * as React from 'react'
import Link from 'next/link'
import { deleteActivity } from '@/actions/settings/activity'
import { type ColumnDef } from '@tanstack/react-table'

import { type Activity } from '@prisma/client'

import { toast } from '@/components/ui/use-toast'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { DataTable } from '@/components/data-table/data-table'
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'

type AwaitedActivity = Pick<Activity, 'code' | 'name'>

interface ActivitiesTableShellProps {
  data: AwaitedActivity[]
  pageCount: number
}

export function ActivitiesTableShell({
  data,
  pageCount
}: Readonly<ActivitiesTableShellProps>): JSX.Element {
  const [isPending, startTransition] = React.useTransition()
  const [selectedRowIds, setSelectedRowIds] = React.useState<string[]>([])

  const columns = React.useMemo<ColumnDef<AwaitedActivity, unknown>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => {
              table.toggleAllPageRowsSelected(!!value)
              setSelectedRowIds((prev) =>
                prev.length === data.length ? [] : data.map((row) => row.code)
              )
            }}
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => {
              row.toggleSelected(!!value)
              setSelectedRowIds((prev) =>
                value ? [...prev, row.original.code] : prev.filter((id) => id !== row.original.code)
              )
            }}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false
      },
      {
        accessorKey: 'code',
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title="Code"
          />
        )
      },
      {
        accessorKey: 'name',
        header: ({ column }) => (
          <DataTableColumnHeader
            column={column}
            title="Name"
          />
        )
      },
      {
        id: 'actions',
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Expand menu"
                variant="ghost"
                className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
              >
                <DotsHorizontalIcon className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-[160px]"
            >
              <DropdownMenuItem
                asChild
                className="cursor-pointer"
              >
                <Link href={`/dasboard/settings/activities/edit/${row.original.code}`}>Edit</Link>
                {/* TODO: fix edit method */}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  startTransition(async () => {
                    try {
                      row.toggleSelected(false)

                      const message = await deleteActivity({
                        code: row.original.code
                      })

                      switch (message) {
                        case 'success':
                          console.log(message, row.original.code)
                          toast({
                            title: `The activity "${row.original.name}" has been deleted`
                          })
                          break
                        default:
                          toast({
                            title: 'Failed to remove activity',
                            description: 'Try again',
                            variant: 'destructive'
                          })
                      }
                    } catch (error) {
                      console.error(error)
                      toast({
                        title: 'Something went wrong',
                        description: 'Try again',
                        variant: 'destructive'
                      })
                    }
                  })
                }}
                disabled={isPending}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
        // cell: ({ row }) => <DataTableRowActions row={row} />
      }
    ],
    [data, isPending, toast]
  )

  function deleteSelectedRows() {
    startTransition(async () => {
      try {
        const messages = await Promise.all(
          selectedRowIds.map((code) =>
            deleteActivity({
              code
            }).catch((error) => {
              console.error(error)
              return 'error'
            })
          )
        )

        const allSucceeded = messages.every((message) => message === 'success')

        if (allSucceeded) {
          toast({
            title: 'Selected activities have been removed'
          })
        } else {
          toast({
            title: 'Some activities were not removed',
            description: 'Try again',
            variant: 'destructive'
          })
        }
      } catch (error) {
        console.error(error)
        toast({
          title: 'Something went wrong',
          description: 'Try again',
          variant: 'destructive'
        })
      }
    })
  }

  return (
    <DataTable
      columns={columns}
      data={data}
      pageCount={pageCount}
      searchableColumns={[
        {
          id: 'name',
          title: 'activities'
        }
      ]}
      newRowLink={`/dashboard/settings/activities/new`}
      deleteRowsAction={() => void deleteSelectedRows()}
    />
  )
}
