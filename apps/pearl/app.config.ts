import { ConfigContext, ExpoConfig } from 'expo/config'

// Replace these with your EAS project ID and project slug.
// You can find them at https://expo.dev/accounts/[account]/projects/[project].
const EAS_PROJECT_ID = '44327e11-69be-47f8-bb3a-7d52848b2954'
const PROJECT_SLUG = 'pearl'
const OWNER = 'bonnyzane'

// App production config
const APP_NAME = 'the black pearl'
const BUNDLE_IDENTIFIER = 'com.baantu.theblackpearl'
const PACKAGE_NAME = 'com.baantu.theblackpearl'
const ICON = './assets/images/icon.png'
const WEB_ICON = './assets/images/favicon.png'
const ADAPTIVE_ICON = './assets/images/icon.png'
const SCHEME = 'theblackpearl'

export default ({ config }: ConfigContext): ExpoConfig => {
    console.log('⚙️ Building app for environment:', process.env.APP_ENV)
    const { name, bundleIdentifier, icon, adaptiveIcon, packageName, scheme } =
        getDynamicAppConfig(
            (process.env.APP_ENV as 'development' | 'preview' | 'production') ||
                'development'
        )

    return {
        ...config,
        name: name,
        version: '1.0.0',
        slug: PROJECT_SLUG, // Must be consistent across all environments.
        orientation: 'portrait',
        userInterfaceStyle: 'automatic',
        newArchEnabled: true,
        icon: icon,
        scheme: scheme,
        ios: {
            supportsTablet: true,
            bundleIdentifier: bundleIdentifier,
        },
        android: {
            adaptiveIcon: {
                foregroundImage: adaptiveIcon,
                backgroundColor: '#ffffff',
            },
            package: packageName,
        },
        updates: {
            url: `https://u.expo.dev/${EAS_PROJECT_ID}`,
        },
        runtimeVersion: {
            policy: 'appVersion',
        },
        extra: {
            eas: {
                projectId: EAS_PROJECT_ID,
            },
        },
        web: {
            bundler: 'metro',
            output: 'static',
            favicon: WEB_ICON,
        },
        plugins: [
            'expo-router',
            [
                'expo-splash-screen',
                {
                    image: './assets/images/splash-icon.png',
                    imageWidth: 200,
                    resizeMode: 'contain',
                    backgroundColor: '#ffffff',
                },
            ],
        ],
        experiments: {
            typedRoutes: true,
        },
        owner: OWNER,
    }
}

// Dynamically configure the app based on the environment.
// Update these placeholders with your actual values.
export const getDynamicAppConfig = (
    environment: 'development' | 'preview' | 'production'
) => {
    if (environment === 'production') {
        return {
            name: APP_NAME,
            bundleIdentifier: BUNDLE_IDENTIFIER,
            packageName: PACKAGE_NAME,
            icon: ICON,
            adaptiveIcon: ADAPTIVE_ICON,
            scheme: SCHEME,
        }
    }

    if (environment === 'preview') {
        return {
            name: `${APP_NAME} Preview`,
            bundleIdentifier: `${BUNDLE_IDENTIFIER}.preview`,
            packageName: `${PACKAGE_NAME}.preview`,
            icon: './assets/images/icons/iOS-Prev.png',
            adaptiveIcon: './assets/images/icons/Android-Prev.png',
            scheme: `${SCHEME}-prev`,
        }
    }

    return {
        name: `${APP_NAME} Development`,
        bundleIdentifier: `${BUNDLE_IDENTIFIER}.dev`,
        packageName: `${PACKAGE_NAME}.dev`,
        icon: ICON,
        adaptiveIcon: ADAPTIVE_ICON,
        scheme: `${SCHEME}-dev`,
    }
}
