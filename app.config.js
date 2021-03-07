export default ({ config }) => {
  return {
    ...config,
    plugins: ['sentry-expo'], // This is for EAS Build support, and will auto-configure your native projects if you ever eject
      hooks: {
        postPublish: [
          {
            file: 'sentry-expo/upload-sourcemaps',
            config: {
              organization: "EXAMPLE_ORGANIZATION",
              project: "EXAMPLE_PROJECT",
              authToken: 'EXAMPLE_AUTH_TOKEN',
            },
          },
        ],
      },
  };
};
