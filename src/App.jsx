import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Popover from "@radix-ui/react-popover";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", value: 5500 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 3100 },
  { month: "Apr", value: 4300 },
  { month: "May", value: 4800 },
  { month: "Jun", value: 2200 },
  { month: "Jul", value: 3500 },
  { month: "Aug", value: 5200 },
  { month: "Sep", value: 1200 },
  { month: "Oct", value: 1400 },
  { month: "Nov", value: 2300 },
  { month: "Dec", value: 4600 },
];

const recentSales = [
  {
    id: 1,
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: 1999,
  },
  { id: 2, name: "Jackson Lee", email: "jackson.lee@email.com", amount: 39 },
  {
    id: 3,
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: 299,
  },
  { id: 4, name: "William Kim", email: "will@email.com", amount: 99 },
  { id: 5, name: "Sofia Davis", email: "sofia.davis@email.com", amount: 39 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-6">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center space-x-2 px-3 py-1 bg-white rounded hover:bg-gray-100">
                <img
                  src="https://i.pravatar.cc/32"
                  alt="Avatar"
                  className="w-6 h-6 rounded-full"
                />
                <span className="font-medium">Alicia Koch</span>
                <span className="text-gray-500">▾</span>
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white rounded shadow py-1">
              <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                My Profile
              </DropdownMenu.Item>
              <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Account Settings
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
              <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </DropdownMenu.Item>
              <DropdownMenu.Arrow className="fill-current text-white" />
            </DropdownMenu.Content>
          </DropdownMenu.Root>

          <NavigationMenu.Root className="flex items-center space-x-4">
            <NavigationMenu.List className="flex space-x-2">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="px-3 py-1 rounded hover:bg-gray-200">
                  Overview
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="px-3 py-1 rounded hover:bg-gray-200">
                  Customers
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="px-3 py-1 rounded hover:bg-gray-200">
                  Products
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="px-3 py-1 rounded hover:bg-gray-200">
                  Settings
                </NavigationMenu.Trigger>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 w-64 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>

          <Popover.Root>
            <Popover.Trigger className="px-4 py-2 bg-white rounded shadow hover:bg-gray-100">
              Date Range
            </Popover.Trigger>
            <Popover.Content className="p-4 bg-white rounded shadow">
              <p>Select a date range...</p>
              <Popover.Arrow className="fill-current text-white" />
            </Popover.Content>
          </Popover.Root>

          <button className="px-4 py-2 bg-black text-white rounded">
            Download
          </button>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-300">
                <img src="https://i.pravatar.cc/300" alt="User avatar" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white rounded shadow py-1">
              <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </DropdownMenu.Item>
              <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
              <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </DropdownMenu.Item>
              <DropdownMenu.Arrow className="fill-current text-white" />
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </header>

      <Tabs.Root
        defaultValue="overview"
        className="mb-6 bg-white rounded shadow"
      >
        <Tabs.List className="flex border-b">
          <Tabs.Trigger
            value="overview"
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-black"
          >
            Overview
          </Tabs.Trigger>
          <Tabs.Trigger
            value="analytics"
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-black"
          >
            Analytics
          </Tabs.Trigger>
          <Tabs.Trigger
            value="reports"
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-black"
          >
            Reports
          </Tabs.Trigger>
          <Tabs.Trigger
            value="notifications"
            className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-black"
          >
            Notifications
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="overview" className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            {/* Cards */}
            <Card
              title="Total Revenue"
              value="$45,231.89"
              subText="+20.1% from last month"
            />
            <Card
              title="Subscriptions"
              value="+2350"
              subText="+180.1% from last month"
            />
            <Card
              title="Sales"
              value="+12,234"
              subText="+19% from last month"
            />
            <Card
              title="Active Now"
              value="+573"
              subText="+201 since last hour"
            />
          </div>

          <div className="flex gap-6">
            <div className="flex-1 bg-white rounded shadow p-4">
              <h3 className="mb-4 font-medium">Overview</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={revenueData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/3 bg-white rounded shadow p-4">
              <h3 className="mb-4 font-medium">Recent Sales</h3>
              <table className="w-full text-left">
                <tbody>
                  {recentSales.map((sale) => (
                    <tr key={sale.id} className="border-b last:border-0">
                      <td className="py-2">
                        <div className="font-medium">{sale.name}</div>
                        <div className="text-sm text-gray-500">
                          {sale.email}
                        </div>
                      </td>
                      <td className="py-2 text-right font-medium">
                        +${sale.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

function Card({ title, value, subText }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{subText}</div>
    </div>
  );
}
