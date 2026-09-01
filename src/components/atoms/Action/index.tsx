import classNames from 'classnames';
import { useState } from 'react';

import { Annotated } from '@/components/Annotated';
import { iconMap } from '@/components/svgs';
import Link from '../Link';

export default function Action(props) {
    const {
        type,
        elementId,
        className,
        label,
        altText,
        url,
        showIcon,
        icon,
        iconPosition = 'right',
        style = 'primary'
    } = props;
    const [emailCopied, setEmailCopied] = useState(false);
    const IconComponent = icon ? iconMap[icon] : null;
    const isEmailAction = typeof url === 'string' && url.startsWith('mailto:');

    const handleClick = async (event) => {
        if (!isEmailAction) {
            return;
        }

        event.preventDefault();
        const emailAddress = url.replace(/^mailto:/, '').split('?')[0];
        try {
            await navigator.clipboard.writeText(emailAddress);
            setEmailCopied(true);
            window.setTimeout(() => setEmailCopied(false), 2500);
        } catch {
            window.location.href = url;
        }
    };

    const baseClasses = [
        'relative inline-flex items-center justify-center gap-1.5 text-center text-lg leading-tight no-underline transition lg:whitespace-nowrap'
    ];
    if (type === 'Button') {
        label ? baseClasses.push('py-4 px-5') : baseClasses.push('p-4');
        style === 'secondary' && baseClasses.push('rounded-full');
        baseClasses.push('border-2 border-current hover:bottom-shadow-6 hover:-translate-y-1.5');
    } else {
        baseClasses.push('uppercase bottom-shadow-1 hover:bottom-shadow-5');
    }

    return (
        <Annotated content={props}>
            <Link
                href={url}
                aria-label={emailCopied ? 'Email address copied' : altText}
                id={elementId || null}
                className={classNames(baseClasses, className)}
                onClick={handleClick}
            >
                {showIcon && IconComponent && iconPosition === 'left' && (
                    <IconComponent className="fill-current h-icon w-icon" />
                )}
                {emailCopied ? 'Email copied' : label}
                {showIcon && IconComponent && iconPosition === 'right' && (
                    <IconComponent className="fill-current h-icon w-icon" />
                )}
                {isEmailAction && <span className="sr-only" aria-live="polite">{emailCopied ? 'Email address copied to clipboard' : ''}</span>}
            </Link>
        </Annotated>
    );
}
