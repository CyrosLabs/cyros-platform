import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { HomeScreen } from '../src/features/home/screens/HomeScreen';
import { homeData } from '../src/features/home/data/mockHomeData';

const renderHomeScreen = (
overrides: Partial<React.ComponentProps<typeof HomeScreen>> = {}
) => {
const props: React.ComponentProps<typeof HomeScreen> = {
data: homeData,
onNavigate: jest.fn(),
onOpenNotifications: jest.fn(),
onOpenSettings: jest.fn(),
...overrides,
};

return render(<HomeScreen {...props} />);
};

describe('HomeScreen', () => {
it('renders the greeting and level summary', async () => {
const { getByText } = await renderHomeScreen();

expect(getByText(/Good (morning|afternoon|evening), Cynthia!/)).toBeTruthy();
expect(getByText('Ready for a new chapter?')).toBeTruthy();
expect(getByText(/Level 3/)).toBeTruthy();
expect(getByText(/1,230 \/ 2,000 XP/)).toBeTruthy();

});

it('renders the current learning sections', async () => {
const { getByText } = await renderHomeScreen();

expect(getByText(/Continue Learning/)).toBeTruthy();
expect(getByText('Lesson 4')).toBeTruthy();
expect(getByText('TOPIK I Course Map')).toBeTruthy();

});

it('renders the daily activity sections', async () => {
const { getByText } = await renderHomeScreen();

expect(getByText(/Today's Challenge/)).toBeTruthy();
expect(getByText(/Daily Goal/)).toBeTruthy();
expect(getByText('Learn 10 new words')).toBeTruthy();
expect(getByText('Earn 100 XP')).toBeTruthy();

});

it('renders the progress summary', async () => {
const { getByText } = await renderHomeScreen();

expect(getByText('Your Progress')).toBeTruthy();
expect(getByText('124')).toBeTruthy();
expect(getByText('Words')).toBeTruthy();
expect(getByText('23')).toBeTruthy();
expect(getByText('Favorites')).toBeTruthy();

});

it('opens notifications when notifications is pressed', async () => {
const onOpenNotifications = jest.fn();

const { getByLabelText } = await renderHomeScreen({
  onOpenNotifications,
});

fireEvent.press(getByLabelText('Notifications'));

expect(onOpenNotifications).toHaveBeenCalledTimes(1);

});

it('opens settings when settings is pressed', async () => {
const onOpenSettings = jest.fn();

const { getByLabelText } = await renderHomeScreen({
  onOpenSettings,
});

fireEvent.press(getByLabelText('Settings'));

expect(onOpenSettings).toHaveBeenCalledTimes(1);

});
});
