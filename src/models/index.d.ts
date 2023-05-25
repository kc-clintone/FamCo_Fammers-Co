import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ReportMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Report {
  readonly id: string;
  readonly image?: (string | null)[] | null;
  readonly description?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Report, ReportMetaData>);
  static copyOf(source: Report, mutator: (draft: MutableModel<Report, ReportMetaData>) => MutableModel<Report, ReportMetaData> | void): Report;
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly image?: string | null;
  readonly Reports?: (Report | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}