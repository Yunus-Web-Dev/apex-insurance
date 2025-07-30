interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, className = "" }) => {
    return <span className={className}>{children}</span>;
};
