/******************************************************************************
 * This file was generated by langium-cli 3.0.1.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
import type { AstNode, Reference, ReferenceInfo, TypeMetaData } from 'langium';
import { AbstractAstReflection } from 'langium';

export const MiniLogoTerminals = {
    HEX: /#(\d|[a-fA-F]){3,6}/,
    ID: /[_a-zA-Z][\w_]*/,
    NUMBER: /(?:(?:-?[0-9]+)?\.[0-9]+)|-?[0-9]+/,
    WS: /\s+/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/,
};

export type Cmd = Color | For | Move | Pen;

export const Cmd = 'Cmd';

export function isCmd(item: unknown): item is Cmd {
    return reflection.isInstance(item, Cmd);
}

export type Expr = BinExpr | PrimExpr;

export const Expr = 'Expr';

export function isExpr(item: unknown): item is Expr {
    return reflection.isInstance(item, Expr);
}

export type PrimExpr = Group | Lit | NegExpr | Ref;

export const PrimExpr = 'PrimExpr';

export function isPrimExpr(item: unknown): item is PrimExpr {
    return reflection.isInstance(item, PrimExpr);
}

export type Stmt = Cmd | Macro;

export const Stmt = 'Stmt';

export function isStmt(item: unknown): item is Stmt {
    return reflection.isInstance(item, Stmt);
}

export interface BinExpr extends AstNode {
    readonly $container: BinExpr | Color | For | Group | Macro | Move | NegExpr;
    readonly $type: 'BinExpr';
    e1: Expr | PrimExpr;
    e2: Expr | PrimExpr;
    op: '*' | '+' | '-' | '/';
}

export const BinExpr = 'BinExpr';

export function isBinExpr(item: unknown): item is BinExpr {
    return reflection.isInstance(item, BinExpr);
}

export interface Color extends AstNode {
    readonly $container: Def | For | Model;
    readonly $type: 'Color';
    b?: Expr;
    color?: string;
    g?: Expr;
    r?: Expr;
}

export const Color = 'Color';

export function isColor(item: unknown): item is Color {
    return reflection.isInstance(item, Color);
}

export interface Def extends AstNode {
    readonly $container: Model;
    readonly $type: 'Def';
    body: Array<Stmt>;
    name: string;
    params: Array<Param>;
}

export const Def = 'Def';

export function isDef(item: unknown): item is Def {
    return reflection.isInstance(item, Def);
}

export interface For extends AstNode {
    readonly $container: Def | For | Model;
    readonly $type: 'For';
    body: Array<Stmt>;
    e1: Expr;
    e2: Expr;
    var: Param;
}

export const For = 'For';

export function isFor(item: unknown): item is For {
    return reflection.isInstance(item, For);
}

export interface Group extends AstNode {
    readonly $container: BinExpr | Color | For | Group | Macro | Move | NegExpr;
    readonly $type: 'Group';
    ge: Expr;
}

export const Group = 'Group';

export function isGroup(item: unknown): item is Group {
    return reflection.isInstance(item, Group);
}

export interface Lit extends AstNode {
    readonly $container: BinExpr | Color | For | Group | Macro | Move | NegExpr;
    readonly $type: 'Lit';
    val: number;
}

export const Lit = 'Lit';

export function isLit(item: unknown): item is Lit {
    return reflection.isInstance(item, Lit);
}

export interface Macro extends AstNode {
    readonly $container: Def | For | Model;
    readonly $type: 'Macro';
    args: Array<Expr>;
    def: Reference<Def>;
}

export const Macro = 'Macro';

export function isMacro(item: unknown): item is Macro {
    return reflection.isInstance(item, Macro);
}

export interface Model extends AstNode {
    readonly $type: 'Model';
    defs: Array<Def>;
    stmts: Array<Stmt>;
}

export const Model = 'Model';

export function isModel(item: unknown): item is Model {
    return reflection.isInstance(item, Model);
}

export interface Move extends AstNode {
    readonly $container: Def | For | Model;
    readonly $type: 'Move';
    ex: Expr;
    ey: Expr;
}

export const Move = 'Move';

export function isMove(item: unknown): item is Move {
    return reflection.isInstance(item, Move);
}

export interface NegExpr extends AstNode {
    readonly $container: BinExpr | Color | For | Group | Macro | Move | NegExpr;
    readonly $type: 'NegExpr';
    ne: Expr;
}

export const NegExpr = 'NegExpr';

export function isNegExpr(item: unknown): item is NegExpr {
    return reflection.isInstance(item, NegExpr);
}

export interface Param extends AstNode {
    readonly $container: Def | For;
    readonly $type: 'Param';
    name: string;
}

export const Param = 'Param';

export function isParam(item: unknown): item is Param {
    return reflection.isInstance(item, Param);
}

export interface Pen extends AstNode {
    readonly $container: Def | For | Model;
    readonly $type: 'Pen';
    mode: 'down' | 'up';
}

export const Pen = 'Pen';

export function isPen(item: unknown): item is Pen {
    return reflection.isInstance(item, Pen);
}

export interface Ref extends AstNode {
    readonly $container: BinExpr | Color | For | Group | Macro | Move | NegExpr;
    readonly $type: 'Ref';
    val: Reference<Param>;
}

export const Ref = 'Ref';

export function isRef(item: unknown): item is Ref {
    return reflection.isInstance(item, Ref);
}

export type MiniLogoAstType = {
    BinExpr: BinExpr
    Cmd: Cmd
    Color: Color
    Def: Def
    Expr: Expr
    For: For
    Group: Group
    Lit: Lit
    Macro: Macro
    Model: Model
    Move: Move
    NegExpr: NegExpr
    Param: Param
    Pen: Pen
    PrimExpr: PrimExpr
    Ref: Ref
    Stmt: Stmt
}

export class MiniLogoAstReflection extends AbstractAstReflection {

    getAllTypes(): string[] {
        return ['BinExpr', 'Cmd', 'Color', 'Def', 'Expr', 'For', 'Group', 'Lit', 'Macro', 'Model', 'Move', 'NegExpr', 'Param', 'Pen', 'PrimExpr', 'Ref', 'Stmt'];
    }

    protected override computeIsSubtype(subtype: string, supertype: string): boolean {
        switch (subtype) {
            case BinExpr:
            case PrimExpr: {
                return this.isSubtype(Expr, supertype);
            }
            case Cmd:
            case Macro: {
                return this.isSubtype(Stmt, supertype);
            }
            case Color:
            case For:
            case Move:
            case Pen: {
                return this.isSubtype(Cmd, supertype);
            }
            case Group:
            case Lit:
            case NegExpr:
            case Ref: {
                return this.isSubtype(PrimExpr, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'Macro:def': {
                return Def;
            }
            case 'Ref:val': {
                return Param;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'BinExpr': {
                return {
                    name: 'BinExpr',
                    properties: [
                        { name: 'e1' },
                        { name: 'e2' },
                        { name: 'op' }
                    ]
                };
            }
            case 'Color': {
                return {
                    name: 'Color',
                    properties: [
                        { name: 'b' },
                        { name: 'color' },
                        { name: 'g' },
                        { name: 'r' }
                    ]
                };
            }
            case 'Def': {
                return {
                    name: 'Def',
                    properties: [
                        { name: 'body', defaultValue: [] },
                        { name: 'name' },
                        { name: 'params', defaultValue: [] }
                    ]
                };
            }
            case 'For': {
                return {
                    name: 'For',
                    properties: [
                        { name: 'body', defaultValue: [] },
                        { name: 'e1' },
                        { name: 'e2' },
                        { name: 'var' }
                    ]
                };
            }
            case 'Group': {
                return {
                    name: 'Group',
                    properties: [
                        { name: 'ge' }
                    ]
                };
            }
            case 'Lit': {
                return {
                    name: 'Lit',
                    properties: [
                        { name: 'val' }
                    ]
                };
            }
            case 'Macro': {
                return {
                    name: 'Macro',
                    properties: [
                        { name: 'args', defaultValue: [] },
                        { name: 'def' }
                    ]
                };
            }
            case 'Model': {
                return {
                    name: 'Model',
                    properties: [
                        { name: 'defs', defaultValue: [] },
                        { name: 'stmts', defaultValue: [] }
                    ]
                };
            }
            case 'Move': {
                return {
                    name: 'Move',
                    properties: [
                        { name: 'ex' },
                        { name: 'ey' }
                    ]
                };
            }
            case 'NegExpr': {
                return {
                    name: 'NegExpr',
                    properties: [
                        { name: 'ne' }
                    ]
                };
            }
            case 'Param': {
                return {
                    name: 'Param',
                    properties: [
                        { name: 'name' }
                    ]
                };
            }
            case 'Pen': {
                return {
                    name: 'Pen',
                    properties: [
                        { name: 'mode' }
                    ]
                };
            }
            case 'Ref': {
                return {
                    name: 'Ref',
                    properties: [
                        { name: 'val' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    properties: []
                };
            }
        }
    }
}

export const reflection = new MiniLogoAstReflection();
