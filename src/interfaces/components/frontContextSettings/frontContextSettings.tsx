import { LOCALES_LIST } from '#constants';
import { SkeletonCheckbox } from 'interfaces/components/skeleton';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SCheckbox, SFrontContextSettings, SLabel } from './styled';

const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

export const FrontContextSettings = () => {
	const [darkTheme, setDarkTheme] = useState(undefined);
    const router = useRouter();

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

    const onLocaleChange = (e) => {
        const locale = e.target.value;
        const { pathname, asPath, query } = router;
        setCookie('NEXT_LOCALE', locale, 365 * 3);
        router.push({ pathname, query }, asPath, { locale });
    }

	return (
		<SFrontContextSettings>
            <select value={router.locale} onChange={onLocaleChange}>
                { LOCALES_LIST.map((locale) => <option value={locale} key={locale}>{locale}</option>) }
            </select>
            <SLabel>
                { darkTheme !== undefined ?
                    <SCheckbox
                        checked={darkTheme}
                        onChange={handleToggle}
                    />
                    : <SkeletonCheckbox />
                }
                <span>Dark</span>
            </SLabel>
		</SFrontContextSettings>
	);
};
