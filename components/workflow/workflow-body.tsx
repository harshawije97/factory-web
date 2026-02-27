"use client";

import { ChevronDownIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import SessionCard from "./session-card";

function WorkflowBody() {

    return (
        <div className="w-full h-full overflow-y-auto pt-6">
            <Card className="mx-auto w-full max-w-sm">
                <CardContent>
                    <Collapsible className="data-[state=open]:bg-transparent rounded-md">
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="group w-full">
                                Workflow Name
                                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="flex flex-col items-start gap-4 pt-3 pb-20 text-sm">
                            <SessionCard title="Session 1"/>
                            <SessionCard title="Session 2"/>
                        </CollapsibleContent>
                    </Collapsible>
                </CardContent>
            </Card>
        </div>
    )
}

export default WorkflowBody