import { FieldErrors, ResolverOptions, FieldValues } from 'react-hook-form';
export declare const toNestError: <TFieldValues extends FieldValues>(errors: FieldErrors, options: ResolverOptions<TFieldValues>) => FieldErrors<TFieldValues>;
