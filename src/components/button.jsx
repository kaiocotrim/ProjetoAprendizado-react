function Button(props) {
    return (
        <button {...props} className={`flex-1 text-3xl text-slate-100 font-bold text-center cursor-pointer ${props.className}`}>{props.children}</button>
    );
}

export default Button;