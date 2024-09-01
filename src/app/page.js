"use client";

import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        (<div className="flex min-h-[100dvh] flex-col bg-background">
            <header className="sticky top-0 z-10 bg-background/90 backdrop-blur">
                <div
                    className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold"
                        prefetch={false}>
                        <FileTextIcon className="h-6 w-6 text-primary" />
                        READMEaker
                    </Link>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        prefetch={false}>
                        <GitlabIcon className="mr-2 h-5 w-5" />
                        View on GitHub
                    </Link>
                </div>
            </header>
            <main className="flex-1 py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        <section className="bg-muted p-6 rounded-md">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-2xl font-bold">Welcome to the READMEaker</h2>
                                    <p className="text-muted-foreground">
                                        This tool helps you create a professional and polished README file for your project. Simply fill out
                                        the form below, and we&apos;ll generate the content for you.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                                <div className="grid gap-1.5">
                                    <Label htmlFor="projectName">Project Name</Label>
                                    <Input id="projectName" type="text" placeholder="Enter your project name" />
                                </div>
                                <div className="grid gap-1.5">
                                    <Label htmlFor="projectDescription">Project Description</Label>
                                    <Textarea id="projectDescription" placeholder="Describe your project" />
                                </div>
                                <div className="grid gap-1.5">
                                    <Label htmlFor="projectVersion">Version</Label>
                                    <Input id="projectVersion" type="text" placeholder="Enter your project version" />
                                </div>
                                <div className="grid gap-1.5">
                                    <Label htmlFor="projectAuthor">Author</Label>
                                    <Input id="projectAuthor" type="text" placeholder="Enter your name" />
                                </div>
                                <div className="grid gap-1.5">
                                    <Label htmlFor="projectLicense">License</Label>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Input id="projectLicense" type="text" placeholder="Select a license" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-[200px]">
                                            <DropdownMenuLabel>Select a License</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>MIT</DropdownMenuItem>
                                            <DropdownMenuItem>Apache 2.0</DropdownMenuItem>
                                            <DropdownMenuItem>GNU GPL v3</DropdownMenuItem>
                                            <DropdownMenuItem>BSD 3-Clause</DropdownMenuItem>
                                            <DropdownMenuItem>Mozilla Public License 2.0</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                                <div className="grid gap-1.5">
                                    <Label htmlFor="projectInstallation">Installation</Label>
                                    <Textarea
                                        id="projectInstallation"
                                        placeholder="Installation instructions will be generated automatically"
                                        disabled />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Button
                                    type="submit"
                                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                                    Generate README.md
                                </Button>
                            </div>
                        </form>
                        <div className="rounded-md border bg-muted p-6">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-xl font-bold">README.md</h2>
                                    <p className="text-muted-foreground">Here is the generated README.md content:</p>
                                </div>
                                <div className="overflow-auto rounded-md border bg-background p-4 text-sm">
                                    # Project Name ## Description ## Version ## Author ## License ## Installation
                                </div>
                                <div className="flex justify-end">
                                    <Button
                                        variant="secondary"
                                        onClick={() => {
                                            console.log("Downloading README.md file...")
                                        }}
                                        className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
                                        <DownloadIcon className="mr-2 h-5 w-5" />
                                        Download README.md
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-muted py-6 text-sm text-muted-foreground">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p>&copy; 2024 READMEaker. All rights reserved.</p>
                </div>
            </footer>
        </div>)
    );
}

function DownloadIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>)
    );
}


function FileTextIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
        </svg>)
    );
}


function GitlabIcon(props) {
    return (
        (<svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path
                d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
        </svg>)
    );
}
