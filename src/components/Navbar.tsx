import { cn } from "../lib/utils";

export default function Navbar() {
return(
<div className="w-fit flex gap-4 mx-auto">
    <NavItem href="/" name="Home" />
    <NavItem href="/blog" name="Blog" />
</div>);
}

function NavItem({name, href}: { name: string, href: string }) {
    return (<a href={href} className={cn('px-4 border border-neutral-200 dark:border-neutral-800 opacity-60 hover:opacity-100 hover:border-neutral-50 dark:hover:border-neutral-600 transition-all rounded-full')}>
        {name}
    </a>);
}