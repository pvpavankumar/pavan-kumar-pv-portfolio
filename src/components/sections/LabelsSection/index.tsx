import classNames from 'classnames';

import { Annotated } from '@/components/Annotated';
import { Link } from '@/components/atoms';
import { iconMap } from '@/components/svgs';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function LabelsSection(props) {
    const { elementId, colors, title, subtitle, items = [], styles = {} } = props;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            {title && (
                <h2 className={classNames('text-4xl sm:text-5xl', mapStyles({ textAlign: sectionAlign }))}>{title}</h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-lg sm:text-xl', mapStyles({ textAlign: sectionAlign }), {
                        'mt-4': title
                    })}
                >
                    {subtitle}
                </p>
            )}
            {items.length > 0 && (
                <div
                    className={classNames('flex flex-wrap gap-3', {
                        'mt-10': title || subtitle,
                        'justify-center': sectionAlign === 'center',
                        'justify-end': sectionAlign === 'right'
                    })}
                >
                    {items.map((item, index) => (
                        <LabelItem key={index} {...item} />
                    ))}
                </div>
            )}
        </Section>
    );
}

function LabelItem(props) {
    const { label, url, icon } = props;
    const IconComponent = icon ? iconMap[icon] : null;
    if (!label) {
        return null;
    }

    return (
        <Annotated content={props}>
            {url ? (
                <Link
                    href={url}
                    className="expertise-chip inline-flex relative items-center text-base leading-tight no-underline transition rounded-full py-3 px-4 border border-current hover:-translate-y-0.5"
                >
                    {IconComponent && <span className="expertise-chip-icon"><IconComponent className="h-5 w-5" /></span>}
                    {label}
                </Link>
            ) : (
                <div className="expertise-chip inline-flex items-center px-4 py-3 text-base leading-tight border border-current rounded-full">
                    {IconComponent && <span className="expertise-chip-icon"><IconComponent className="h-5 w-5" /></span>}
                    {label}
                </div>
            )}
        </Annotated>
    );
}
