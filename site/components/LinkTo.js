import Link from 'next/link';

function LinkTo({ href, children, ...props }) {
return (
    <Link href={href}>
        <a style={{textDecoration:'none'}} {...props}>{children}</a>
    </Link>
);
}

export default LinkTo;