import { wrapStep } from '@w4rlock/semantic-release-plugin-decorators';
import { compose } from 'ramda';
import readPkg from 'read-pkg';
import { logPluginVersion } from './log-plugin-version.js';
import { withOnlyPackageCommits } from './only-package-commits.js';
import versionToGitTag from './version-to-git-tag';

import { mapNextReleaseVersion, withOptionsTransforms } from './options-transforms';

export const analyzeCommits = wrapStep(
  'analyzeCommits',
  compose(logPluginVersion('analyzeCommits'), withOnlyPackageCommits),
  {
    wrapperName: 'semantic-release-monorepo'
  }
);

export const generateNotes = wrapStep(
  'generateNotes',
  compose(
    logPluginVersion('generateNotes'),
    withOnlyPackageCommits,
    withOptionsTransforms([mapNextReleaseVersion(versionToGitTag)])
  ),
  {
    wrapperName: 'semantic-release-monorepo'
  }
);

export const success = wrapStep(
  'success',
  compose(
    logPluginVersion('success'),
    withOnlyPackageCommits,
    withOptionsTransforms([mapNextReleaseVersion(versionToGitTag)])
  ),
  {
    wrapperName: 'semantic-release-monorepo'
  }
);

export const fail = wrapStep(
  'fail',
  compose(
    logPluginVersion('fail'),
    withOnlyPackageCommits,
    withOptionsTransforms([mapNextReleaseVersion(versionToGitTag)])
  ),
  {
    wrapperName: 'semantic-release-monorepo'
  }
);

export const tagFormat = `${readPkg.sync().name}-v\${version}`;
