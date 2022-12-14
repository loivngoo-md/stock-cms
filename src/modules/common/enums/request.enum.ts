export enum RequestStatus {
  PM_PENDING = 'PM_PENDING',
  PM_REJECTED = 'PM_REJECTED',
  PM_APPROVED = 'PM_APPROVED',

  IT_PENDING = 'IT_PENDING',
  IT_REJECTED = 'IT_REJECTED',
  IT_APPROVED = 'IT_APPROVED',

  IT_RETURNED = 'IT_RETURNED',
  IT_DELIVERED = 'IT_DELIVERED',
}

export enum RequestType {
  ADDITIONAL = 'ADDITIONAL',
  RETURN = 'RETURN',
}

export enum RequestPriority {
  MINOR = 'MINOR',
  MEDIUM = 'MEDIUM',
  MAJOR = 'MAJOR',
  CRITICAL = 'CRITICAL',
}
