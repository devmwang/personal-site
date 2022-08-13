const GOOGLE_ANALYTICS_ID = process.env.GOOGLE_ANALYTICS_ID as string

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL, title: string): void => {
    window.gtag("config", GOOGLE_ANALYTICS_ID, {
        page_path: url,
        page_title: title,
    });
};

type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent): void => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
    });
};