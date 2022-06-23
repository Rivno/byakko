import { COLOR_THEME } from '#design';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const SDarkModeSwitch = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: fit-content;
    padding: 1rem;
    background-color: var(--color-background-secondary);
    color: ${COLOR_THEME.text};
    border-bottom-left-radius: 6px;
`;

export const SLabel = styled.label`
    display: inline-flex;
    gap: 0.5rem;
    place-items: center;
    font-weight: 600;
`;

export const DarkModeSwitch = () => {
	const [darkTheme, setDarkTheme] = useState(undefined);

	const handleToggle = (event) => {
		setDarkTheme(event.target.checked);
	};

	useEffect(() => {
		const root = window.document.documentElement;
		const initialColorValue = root.style.getPropertyValue(
			'--initial-color-mode',
		);

		setDarkTheme(initialColorValue === 'dark');
	}, []);
	useEffect(() => {
		if (darkTheme !== undefined) {
			if (darkTheme) {
				document.documentElement.setAttribute('data-theme', 'dark');
				window.localStorage.setItem('atora-theme', 'dark');
			} else {
				document.documentElement.removeAttribute('data-theme');
				window.localStorage.setItem('atora-theme', 'light');
			}
		}
	}, [darkTheme]);

	return (
		<SDarkModeSwitch>
			{darkTheme !== undefined && (
				<SLabel>
					<input
						type="checkbox"
						checked={darkTheme}
						onChange={handleToggle}
					/>
					<span>Dark</span>
				</SLabel>
			)}
		</SDarkModeSwitch>
	);
};
