import { DatabaseError } from "pg-protocol";
import { QueryFailedError } from "typeorm";

export enum PostgresErrorCode {
  UniqueViolation = "23505",
  CheckViolation = "23514",
  NotNullViolation = "23502",
  ForeignKeyViolation = "23503"
}

export const isQueryFailedError = (
  err: unknown
): err is QueryFailedError & DatabaseError => err instanceof QueryFailedError;
