import type { IconType } from 'react-icons';
import * as Si from 'react-icons/si';

type IconName = keyof typeof Si;

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    iconViewBox?: string;
    className?: string;
}

const FILL_THIN_ICONS = ['postgresql', 'laravel', 'express'];

/**
 * React wrapper for SimpleIcons icons, because the equivalent astro package
 * makes Astro's bundler choke on during import resolution.
 *
 * @param name - Name of the SimpleIcon icon to render (see https://simpleicons.org) or raw SVG path data
 * @param size - Size of the icon (default: 24)
 * @param color - Color of the icon (default: 'currentColor')
 * @param className - Additional CSS classes to apply to the icon
 * @returns A React component rendering the specified icon
 */
export function ReactIcon({
    name,
    size = 24,
    color = 'currentColor',
    iconViewBox = '0 0 24 24',
    className,
}: IconProps) {
    if (name.startsWith('<path')) {
        return (
      <svg
        className="mr-1"
        viewBox={iconViewBox}
        fill={color} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
        style={{ 
          width: `${size + 4}px !important`,     // ✅ !important + inline
          height: `${size + 4}px !important`,
          minWidth: `${size + 4}px`,
          minHeight: `${size + 4}px`,
          display: 'block',
          flexShrink: 0
        }}
        dangerouslySetInnerHTML={{ __html: name }} 
      />
    );
    }

    const componentName =
        `Si${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}` as IconName;
    const IconComponent = Si[componentName] as IconType | undefined;

    if (!IconComponent) {
        console.warn(`Icon "${name}" nicht gefunden in react-icons/si`);
        return null;
    }

    return <IconComponent size={size} color={color} strokeWidth={FILL_THIN_ICONS.includes(name.toLowerCase()) ? 1.3 : 1} className={className} />;
}
