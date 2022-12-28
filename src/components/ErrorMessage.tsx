import React from "react";

interface ErrorMessageProps {
    error: string
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => <div className="error text-center text-red-600">{error}</div>;
