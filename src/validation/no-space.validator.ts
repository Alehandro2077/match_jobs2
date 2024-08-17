import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'noSpaces', async: false })
export class NoSpacesValidator implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return !text.includes(' ');
  }

  defaultMessage(args: ValidationArguments) {
    return `Spaces are not allowed in ${args.property}`;
  }
}