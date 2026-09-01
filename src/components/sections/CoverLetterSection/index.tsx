import { useMemo, useState } from 'react';

import Section from '../Section';
import { iconMap } from '@/components/svgs';

const DownloadIcon = iconMap.download;
const DocumentIcon = iconMap.document;
const BriefcaseIcon = iconMap.briefcase;

const escapeHtml = (value: string) =>
    value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);

const safeFilename = (value: string) => value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'custom';

export default function CoverLetterSection(props) {
    const { elementId, colors, title, subtitle, styles = {} } = props;
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('Staff Frontend Engineer');
    const [hiringManager, setHiringManager] = useState('Hiring Manager');
    const [priorities, setPriorities] = useState('frontend architecture, engineering leadership, and AI-enabled delivery');
    const [customMessage, setCustomMessage] = useState(
        'I am especially interested in helping your teams turn complex product requirements into accessible, high-performing experiences while raising engineering quality across the organization.'
    );

    const firm = company.trim() || 'your organization';
    const position = role.trim() || 'Staff Frontend Engineer';
    const recipient = hiringManager.trim() || 'Hiring Manager';
    const focus = priorities.trim() || 'frontend architecture and engineering leadership';
    const personalNote = customMessage.trim();

    const paragraphs = useMemo(
        () => [
            `I am writing to express my interest in the ${position} opportunity at ${firm}. With 13+ years of frontend engineering experience across ServiceNow, Deloitte Digital, Infosys, and Tata Consultancy Services, I bring a combination of hands-on architecture, technical leadership, and enterprise delivery experience.`,
            `My background aligns particularly well with your focus on ${focus}. I have led and mentored engineering teams of up to 15, shaped scalable frontend architectures, and delivered measurable outcomes including 50% lower application latency, 30% faster page loads, and a 50% reduction in manual presales effort through practical GenAI automation.`,
            personalNote,
            `I would welcome the opportunity to discuss how my experience in React, JavaScript, Node.js, ServiceNow, micro-frontends, accessibility, performance engineering, and AI-enabled workflows could contribute to ${firm}. Thank you for your time and consideration.`
        ].filter(Boolean),
        [firm, focus, personalNote, position]
    );

    const downloadWord = () => {
        const body = paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('');
        const documentHtml = `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Calibri,Arial,sans-serif;font-size:11pt;line-height:1.55;color:#172033;max-width:720px;margin:54px auto}h1{font-size:18pt;margin:0 0 4px}p{margin:0 0 16px}.meta{color:#4b5d73;margin-bottom:32px}.closing{margin-top:28px}</style></head><body><h1>Venkata Pavan Kumar Pasumarthi</h1><div class="meta">Hyderabad, Telangana, India<br>pasumarthi.kumar@gmail.com</div><p>Dear ${escapeHtml(recipient)},</p>${body}<p class="closing">Sincerely,<br><strong>Venkata Pavan Kumar Pasumarthi</strong></p></body></html>`;
        const blob = new Blob(['\ufeff', documentHtml], { type: 'application/msword' });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `${safeFilename(firm)}-${safeFilename(position)}-cover-letter.doc`;
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
        URL.revokeObjectURL(url);
    };

    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            <div className="cover-letter-heading">
                <span className="cover-letter-kicker"><DocumentIcon className="h-5 w-5" /> Tailor before you apply</span>
                {title && <h2>{title}</h2>}
                {subtitle && <p>{subtitle}</p>}
            </div>

            <div className="cover-letter-builder">
                <form className="cover-letter-form" onSubmit={(event) => event.preventDefault()}>
                    <div className="cover-letter-form-title">
                        <span><BriefcaseIcon className="h-5 w-5" /></span>
                        <div><h3>Customize the letter</h3><p>Update the details that should change for each application.</p></div>
                    </div>
                    <label>Company or firm<input value={company} onChange={(event) => setCompany(event.target.value)} placeholder="e.g. Adobe" /></label>
                    <label>Target role<input value={role} onChange={(event) => setRole(event.target.value)} /></label>
                    <label>Hiring manager<input value={hiringManager} onChange={(event) => setHiringManager(event.target.value)} /></label>
                    <label>Role priorities<textarea value={priorities} onChange={(event) => setPriorities(event.target.value)} rows={3} /></label>
                    <label>Your tailored message<textarea value={customMessage} onChange={(event) => setCustomMessage(event.target.value)} rows={4} /></label>
                    <div className="cover-letter-actions">
                        <button type="button" className="cover-letter-primary" onClick={downloadWord}><DownloadIcon className="h-5 w-5" /> Download Word</button>
                        <button type="button" className="cover-letter-secondary" onClick={() => window.print()}><DocumentIcon className="h-5 w-5" /> Print / Save PDF</button>
                    </div>
                    <p className="cover-letter-privacy">Your edits stay in your browser and are not submitted or stored.</p>
                </form>

                <article className="cover-letter-preview" aria-label="Customized cover letter preview">
                    <div className="cover-letter-preview-label">Live preview</div>
                    <header><h3>Venkata Pavan Kumar Pasumarthi</h3><p>Hyderabad, Telangana, India · pasumarthi.kumar@gmail.com</p></header>
                    <p>Dear {recipient},</p>
                    {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                    <p className="cover-letter-signoff">Sincerely,<br /><strong>Venkata Pavan Kumar Pasumarthi</strong></p>
                </article>
            </div>
        </Section>
    );
}
