import React, { useTransition } from "react";
import useDesigner from "./hooks/useDesigner";
import { toast } from "./ui/use-toast";
import { UpdateFormContent } from "../../actions/form";

import { Button } from "./ui/button";
import { HiSaveAs } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";

export default function SaveFormBtn({ id }: { id: number }) {
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();

  const updateFormContent = async () => {
    try {
      const jsonElements = JSON.stringify(elements);
      await UpdateFormContent(id, jsonElements);
      toast({
        title: "Success",
        description: "Your Form has been saved",
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button
      variant={"outline"}
      className="gap-2"
      disabled={loading}
      onClick={() => {
        startTransition(updateFormContent);
      }}
    >
      <HiSaveAs className="h-5 w-5" />
      Save
      {loading && <FaSpinner className="animate-spin" />}
    </Button>
  );
}
