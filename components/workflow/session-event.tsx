"use client";

import React from 'react'
import { ArrowRightCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Field, FieldGroup, FieldLabel } from '../ui/field';
import { Checkbox } from '../ui/checkbox';

interface SessionEventProps {
    name: string
}

function SessionEvent({ name }: SessionEventProps) {
    return (
        <section className="w-full flex justify-between items-center">
            <section className="flex items-center space-x-2">
                <FieldGroup className="mx-auto">
                    <Field orientation="horizontal">
                        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" aria-invalid />
                        <FieldLabel htmlFor="terms-checkbox-basic">
                            {name}
                        </FieldLabel>
                    </Field>
                </FieldGroup>
            </section>
            <section className="flex items-center space-x-3">
                <span className="text-gray-600">
                    12:00
                </span>
                <Button type="button" size={"icon-sm"} variant={"outline"}>
                    <ArrowRightCircle className="size-5" />
                </Button>
            </section>
        </section>
    )
}

export default SessionEvent