export default function Button({ children, className, textOnly, ...props }) {
    
    let cssClassess = textOnly ? "text-button" : "button";
    cssClassess += ' ' + className;

    return (
        <button {...props} className={cssClassess}>
            {children}
        </button>
    );
}