# Git Workflow

- 'development' branch should be considered as stable in development environment.
- All features or issues should not be implemented or fixed directly on the 'dev' branch, a separate branch should be taken out from the 'dev' branch and implementation or fix should be done on this separate branch.
- This separate branch name should be prefixed with 'feature/' or 'bug/' respectively based on if that branch is going to be used for feature implementation or issue fixing.
- This separate branch name should explain in short what getting implemented or fixed like 'api-referenence-page-implementation' or 'integration-guide-page-reset-button-not-working-fix'.
- This seprate branch can also contain 'id' of the tracker for the feature (story) or issue in project issue tracker tool if it's being used like '230-api-explorer-page-crashing-on-send-clicked'
- Once the implementation or fix is completed in feature or issue branch, PR should be created back to parent (dev) branch. PR should be reviewed by appropriate person and after successful review only it should be merged back to 'dev' branch.
- Post merge the feature or issue branch should be deleted

- 'uat' branch should be considered as stable branch for UAT environment
- 'master' branch should be considered as stable branch for PROD environment
