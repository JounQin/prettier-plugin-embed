import type { SupportOptions } from "prettier";
import {
  type AutocompleteStringList,
  type StringListToInterfaceKey,
  makeIdentifiersOptionName,
} from "../utils.js";
import { language } from "./language.js";

const DEFAULT_IDENTIFIERS = ["java"] as const;
type Identifiers = AutocompleteStringList<typeof DEFAULT_IDENTIFIERS>;
type DefaultIdentifiersHolder = StringListToInterfaceKey<
  typeof DEFAULT_IDENTIFIERS
>;

const EMBEDDED_LANGUAGE_IDENTIFIERS = makeIdentifiersOptionName(language);

/**
 * Location:
 * https://github.com/jhipster/prettier-java/blob/983a09d890ae832565ceda1a28b3074e061e3cea/packages/prettier-plugin-java/src/options.js
 */
export interface PrettierPluginDepsOptions {
  entrypoint?:
    | "arrayInitializer"
    | "variableInitializerList"
    | "block"
    | "blockStatements"
    | "blockStatement"
    | "localVariableDeclarationStatement"
    | "localVariableDeclaration"
    | "localVariableType"
    | "statement"
    | "statementWithoutTrailingSubstatement"
    | "emptyStatement"
    | "labeledStatement"
    | "expressionStatement"
    | "statementExpression"
    | "ifStatement"
    | "assertStatement"
    | "switchStatement"
    | "switchBlock"
    | "switchBlockStatementGroup"
    | "switchLabel"
    | "switchRule"
    | "caseConstant"
    | "whileStatement"
    | "doStatement"
    | "forStatement"
    | "basicForStatement"
    | "forInit"
    | "forUpdate"
    | "statementExpressionList"
    | "enhancedForStatement"
    | "breakStatement"
    | "continueStatement"
    | "returnStatement"
    | "throwStatement"
    | "synchronizedStatement"
    | "tryStatement"
    | "catches"
    | "catchClause"
    | "catchFormalParameter"
    | "catchType"
    | "finally"
    | "tryWithResourcesStatement"
    | "resourceSpecification"
    | "resourceList"
    | "resource"
    | "yieldStatement"
    | "variableAccess"
    | "classDeclaration"
    | "normalClassDeclaration"
    | "classModifier"
    | "typeParameters"
    | "typeParameterList"
    | "superclass"
    | "superinterfaces"
    | "interfaceTypeList"
    | "classPermits"
    | "classBody"
    | "classBodyDeclaration"
    | "classMemberDeclaration"
    | "fieldDeclaration"
    | "fieldModifier"
    | "variableDeclaratorList"
    | "variableDeclarator"
    | "variableDeclaratorId"
    | "variableInitializer"
    | "unannType"
    | "unannPrimitiveTypeWithOptionalDimsSuffix"
    | "unannPrimitiveType"
    | "unannReferenceType"
    | "unannClassOrInterfaceType"
    | "unannClassType"
    | "unannInterfaceType"
    | "unannTypeVariable"
    | "methodDeclaration"
    | "methodModifier"
    | "methodHeader"
    | "result"
    | "methodDeclarator"
    | "receiverParameter"
    | "formalParameterList"
    | "formalParameter"
    | "variableParaRegularParameter"
    | "variableArityParameter"
    | "variableModifier"
    | "throws"
    | "exceptionTypeList"
    | "exceptionType"
    | "methodBody"
    | "instanceInitializer"
    | "staticInitializer"
    | "constructorDeclaration"
    | "constructorModifier"
    | "constructorDeclarator"
    | "simpleTypeName"
    | "constructorBody"
    | "explicitConstructorInvocation"
    | "unqualifiedExplicitConstructorInvocation"
    | "qualifiedExplicitConstructorInvocation"
    | "enumDeclaration"
    | "enumBody"
    | "enumConstantList"
    | "enumConstant"
    | "enumConstantModifier"
    | "enumBodyDeclarations"
    | "recordDeclaration"
    | "recordHeader"
    | "recordComponentList"
    | "recordComponent"
    | "variableArityRecordComponent"
    | "recordComponentModifier"
    | "recordBody"
    | "recordBodyDeclaration"
    | "compactConstructorDeclaration"
    | "isDims"
    | "expression"
    | "lambdaExpression"
    | "lambdaParameters"
    | "lambdaParametersWithBraces"
    | "lambdaParameterList"
    | "inferredLambdaParameterList"
    | "explicitLambdaParameterList"
    | "lambdaParameter"
    | "regularLambdaParameter"
    | "lambdaParameterType"
    | "lambdaBody"
    | "ternaryExpression"
    | "binaryExpression"
    | "unaryExpression"
    | "unaryExpressionNotPlusMinus"
    | "primary"
    | "primaryPrefix"
    | "primarySuffix"
    | "fqnOrRefType"
    | "fqnOrRefTypePartRest"
    | "fqnOrRefTypePartCommon"
    | "fqnOrRefTypePartFirst"
    | "parenthesisExpression"
    | "castExpression"
    | "primitiveCastExpression"
    | "referenceTypeCastExpression"
    | "newExpression"
    | "unqualifiedClassInstanceCreationExpression"
    | "classOrInterfaceTypeToInstantiate"
    | "typeArgumentsOrDiamond"
    | "diamond"
    | "methodInvocationSuffix"
    | "argumentList"
    | "arrayCreationExpression"
    | "arrayCreationDefaultInitSuffix"
    | "arrayCreationExplicitInitSuffix"
    | "dimExprs"
    | "dimExpr"
    | "classLiteralSuffix"
    | "arrayAccessSuffix"
    | "methodReferenceSuffix"
    | "pattern"
    | "typePattern"
    | "recordPattern"
    | "componentPatternList"
    | "componentPattern"
    | "unnamedPattern"
    | "guard"
    | "isRefTypeInMethodRef"
    | "interfaceDeclaration"
    | "normalInterfaceDeclaration"
    | "interfaceModifier"
    | "extendsInterfaces"
    | "interfacePermits"
    | "interfaceBody"
    | "interfaceMemberDeclaration"
    | "constantDeclaration"
    | "constantModifier"
    | "interfaceMethodDeclaration"
    | "interfaceMethodModifier"
    | "annotationTypeDeclaration"
    | "annotationTypeBody"
    | "annotationTypeMemberDeclaration"
    | "annotationTypeElementDeclaration"
    | "annotationTypeElementModifier"
    | "defaultValue"
    | "annotation"
    | "elementValuePairList"
    | "elementValuePair"
    | "elementValue"
    | "elementValueArrayInitializer"
    | "elementValueList"
    | "literal"
    | "integerLiteral"
    | "floatingPointLiteral"
    | "booleanLiteral"
    | "moduleName"
    | "packageName"
    | "typeName"
    | "expressionName"
    | "methodName"
    | "packageOrTypeName"
    | "ambiguousName"
    | "compilationUnit"
    | "ordinaryCompilationUnit"
    | "modularCompilationUnit"
    | "packageDeclaration"
    | "packageModifier"
    | "importDeclaration"
    | "typeDeclaration"
    | "moduleDeclaration"
    | "moduleDirective"
    | "requiresModuleDirective"
    | "exportsModuleDirective"
    | "opensModuleDirective"
    | "usesModuleDirective"
    | "providesModuleDirective"
    | "requiresModifier"
    | "primitiveType"
    | "numericType"
    | "integralType"
    | "floatingPointType"
    | "referenceType"
    | "classOrInterfaceType"
    | "classType"
    | "interfaceType"
    | "typeVariable"
    | "dims"
    | "typeParameter"
    | "typeParameterModifier"
    | "typeBound"
    | "additionalBound"
    | "typeArguments"
    | "typeArgumentList"
    | "typeArgument"
    | "wildcard"
    | "wildcardBounds";
}

export const options = {
  [EMBEDDED_LANGUAGE_IDENTIFIERS]: {
    category: "Embed",
    type: "string",
    array: true,
    default: [{ value: [...DEFAULT_IDENTIFIERS] }],
    description:
      "Tag or comment identifiers that make their subsequent template literals be identified as embedded Java language. This option requires the `prettier-plugin-java` plugin.",
  },
} as const satisfies SupportOptions;

type Options = typeof options;

declare module "../types.js" {
  interface EmbeddedOptions extends Options {}
  interface EmbeddedDefaultIdentifiersHolder extends DefaultIdentifiersHolder {}
  interface PrettierPluginEmbedOptions {
    [EMBEDDED_LANGUAGE_IDENTIFIERS]?: Identifiers;
  }
}

declare module "prettier" {
  interface Options extends PrettierPluginDepsOptions {}
}
