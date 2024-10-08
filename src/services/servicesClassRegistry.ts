import { InjectionToken } from 'tsyringe';
import { GitService } from './git/GitService';
import { GitRepositoryService } from './git/GitRepositoryService';
import { GitRepositoryCheckoutService } from './git/GitRepositoryCheckoutService';
import { SettingsService } from './settings/SettingsService';
import { FeatureManagerService } from './features/FeatureManagerService';
import { GitRepositoriesActionsService } from './git/GitRepositoriesActionsService';
import { GitRepositoriesBranchService } from './git/GitRepositoriesBranchService';
import { WorkSpaceCacheService } from './base/WorkspaceCacheService';

export const SERVICES_CLASS_REGISTRY: InjectionToken<any>[] = [
  WorkSpaceCacheService,
  GitService,
  GitRepositoryService,
  GitRepositoryCheckoutService,
  SettingsService,
  FeatureManagerService,
  GitRepositoriesActionsService,
  GitRepositoriesBranchService,
];
