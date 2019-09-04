import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
const getMatchOptions = ({ context: { kind, story }, url }) => {
    return {
        failureThreshold: 0.2,
        failureThresholdType: 'percent',
    };
};
const beforeScreenshot = (page, { context: { kind }, url }) => {
    switch (kind) {
        default:
            return page.setViewport({ width: 800, height: 600 }).then(() => {
                return new Promise(() => setTimeout(resolve, 300));
            });;
    };
};
initStoryshots({
    suite: 'Image storyshots',
    test: imageSnapshot({ storybookUrl: 'http://localhost:6006', beforeScreenshot }),
});
