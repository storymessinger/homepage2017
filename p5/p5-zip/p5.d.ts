// Type definitions for p2.js v0.7.1
// Project: https://github.com/processing/p5.js
// Definitions by: kaorun343 <https://github.com/kaorun343>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
 
declare namespace p5js {
    interface p5Prototype {
        // core/constants.js
        // GRAPHICS RENDERER
        P2D: string;
        WEBGL: string;
        // ENVIRONMENT
        ARROW: string;
        CROSS: string;
        HAND: string;
        TEXT: string;
        WAIT: string;
        // TRIGONOMETRY
        HALF_PI: number;
        PI: number;
        QUARTER_PI: number;
        TAU: number;
        TWO_PI: number;
        DEGREES: string;
        RADIANS: string;
        // SHAPE
        CORNER: string;
        CORNERS: string;
        RADIUS: string;
        RIGHT: string;
        LEFT: string;
        CENTER: string;
        TOP: string;
        BOTTOM: string;
        BASELINE: string;
        POINTS: string;
        LINES: string;
        TRIANGLES: string;
        TRIANGLES_FAN: string;
        TRIANGLES_STRIP: string;
        QUADS: string;
        QUAD_STRIP: string;
        CLOSE: string;
        OPEN: string;
        CHORD: string;
        PIE: string;
        PROJECT: string;
        SQUARE: string;
        ROUND: string;
        BEVEL: string;
        MITER: string;
        // COLOR
        RGB: string;
        HSB: string;
        HSL: string;
        // DOM EXTENSION
        AUTO: string;
        // INPUT
        ALT: number;
        BACKSPACE: number;
        CONTROL: number;
        DELETE: number;
        DOWN_ARROW: number;
        ENTER: number;
        ESCAPE: number;
        LEFT_ARROW: number;
        OPTION: number;
        RETURN: number;
        RIGHT_ARROW: number;
        SHIFT: number;
        TAB: number;
        UP_ARROR: number;
        // RENDERING
        BLEND: string;
        ADD: string;
        DARKSET: string;
        LIGHTSET: string;
        DIFFERENCE: string;
        EXCLUSION: string;
        MULTIPLY: string;
        SCREEN: string;
        REPLACE: string;
        OVERLAY: string;
        HARD_LIGHT: string;
        SOFT_LIGHT: string;
        DODGE: string;
        BURN: string;
        // FILTERS
        THRESHOLD: string;
        GRAY: string;
        OPAQUE: string;
        INVERT: string;
        POSTERIZE: string;
        DILATE: string;
        ERODE: string;
        BLUR: string;
        // TYPOGRAPHY
        NORMAL: string;
        ITALIC: string;
        BOLD: string;
        // VERTICES
        LINEAR: string;
        QUADRATIC: string;
        BEZIER: string;
        CURVE: string;
 
        // core/2d_primitives.js
        arc(a: number, b: number, c: number, d: number, start: number, stop: number, mode?: string): this;
        ellipse(a: number, b: number, c: number, d: number): this;
        line(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): this;
        line(x1: number, y1: number, x2: number, y2: number): this;
        point(x: number, y: number, z: number): this;
        point(x: number, y: number): this;
        quad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, x5: number, y5: number, x6: number, y6: number): this;
        quad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): this;
        rect(x: number, y: number, w: number, h: number, tl?: number, tr?: number, br?: number, bl?: number): this;
        triangle(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number): this;
        triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): this;
 
        // core/attributes.js
        ellipseMode(mode: string): this;
        noSmooth(): this;
        rectMode(mode: string): this;
        smooth(): this;
        strokeCap(cap: string): this;
        strokeJoin(join: string): this;
        strokeWeight(weight: number): this;
 
        // core/curves.js
        bezier(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): this;
        bezierDetail(detail: number): this;
        bezierPoint(a: number, b: number, c: number, d: number, t: number): number;
        bezierTangent(a: number, b: number, c: number, d: number, t: number): number;
        curve(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): this;
        curveDetail(detail: number): this;
        curveTightness(tightness: number): void;
        curvePoint(a: number, b: number, c: number, d: number, t: number): number;
        curveTangent(a: number, b: number, c: number, d: number, t: number): number;
        print(args: any): void;
        println(args: any): void;
        frameCount: number;
        focused: boolean;
        cursor(type: string, x: number, y: number): void;
        frameRate(): number;
        frameRate(fps: number): this;
        getFrameRate(): number;
        setFrameRate(fps: number): number;
        noCursor(): void;
        displayWidth: number;
        displayHeight: number;
        windowWidth: number;
        windowHeight: number;
        width: number;
        height: number;
        fullScrenn(val?: boolean): void;
        pixelDensity(val: number): void;
        pixelDensity(): number;
        displayDensity(): number;
        getURL(): string;
        getURLPath(): string[];
        getURLParams(): { [key: string]: string };
 
        // core/rendering.js
        createCanvas(w: number, h: number, renderer: string | boolean): p5Renderer2D;
        resizeCanvas(w: number, h: number, noRedraw: boolean): void;
        noCanvas(): void;
        createGraphics(w: number, h: number, renderer: string): p5Graphics;
        blendMode(mode: string): void;
 
        // core/structure.js
        noLoop(): void;
        loop(): void;
        push(): void;
        pop(): void;
        redraw(): void;
 
        // core/transform.js
        applyMatrix(n00: number, n01: number, n02: number, n10: number, n11: number, n12: number): this;
        resetMatrix(): this;
        rotate(rad: number, mode?: string): this;
        rotateX(rad: number): this;
        rotateY(rad: number): this;
        rotateZ(rad: number): this;
        scale(s: number | p5Vector | number[][]): this;
        shearX(angle: number): this;
        shearY(angle: number): this;
        translate(x: number, y: number, z: number): this;
 
        // core/vertex.js
        beginContour(): this;
        beginShape(kind: string): this;
        bezierVertext(x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): this;
        curveVertext(x: number, y: number): this;
        endContour(): this;
        endShape(mode: string): this;
        quadraticVertex(cx: number, cy: number, x3: number, y3: number): this;
        vertex(x: number, y: number, moveTo: boolean);
 
        // events/acceleration.js
        deviceOrientation: string;
        accelerationX: number;
        accelerationY: number;
        accelerationZ: number;
        pAccelerationX: number;
        pAccelerationY: number;
        pAccelerationZ: number;
        rotationX: number;
        rotationY: number;
        rotationZ: number;
        pRotationX: number;
        pRotationY: number;
        pRotationZ: number;
        turnAxis: any;
        setMoveThreshold(val: number): void;
        setShakeThreshold(val: number): void;
 
        // events/keyboard.js
        iskeyPressed: boolean;
        keyIsPressed: boolean;
        key: string;
        keyCode: number;
        keyIsDown(code: number): boolean;
    }
 
    interface p5 extends p5Prototype {
        // core/core.js
        setup(): void;
        draw(): void;
 
        // events/acceleration.js
        deviceMoved(): void;
        deviceTurned(): void;
        deviceShaken(): void;
 
        // events/keyboard.js
        keyPressed(): void;
        keyReleased(): void;
        keyTyped(): void;
    }
 
    interface p5ElementPrototype {
        parent(parent: p5Element): this;
        id(): string;
        id(id: string): this;
        class(): string;
        class(c: string): this;
        mousePressed(fxn: Function): this;
        mouseWheel(fxn: Function): this;
        mouseReleased(fxn: Function): this;
        mouseClicked(fxn: Function): this;
        mouseMoved(fxn: Function): this;
        mouseOver(fxn: Function): this;
        changed(fxn: Function): this;
        input(fxn: Function): this;
        mouseOut(fxn: Function): this;
        touchStarted(fxn: Function): this;
        touchMoved(fxn: Function): this;
        touchEnded(fxn: Function): this;
        dragOver(fxn: Function): this;
        dragLeave(fxn: Function): this;
        drop(fxn: Function): this;
    }
 
    interface p5Element extends p5ElementPrototype {
        elt: HTMLElement;
        width: number;
        height: number;
    }
 
    interface p5ElementStatic {
        new (elt: HTMLElement, pInst?: p5): p5Element;
        prototype: p5ElementPrototype;
    }
 
    interface p5GraphicsPrototype extends p5ElementPrototype, p5 { }
 
    interface p5Graphics extends p5GraphicsPrototype, p5Element {
        width: number;
        height: number;
    }
 
    interface p5GraphicsStatic {
        new (w: number, h: number, elt: string, pInst?: p5): p5Graphics;
        prototype: p5GraphicsPrototype;
    }
 
    interface p5RendererPrototype extends p5ElementPrototype {
        resize(w: number, h: number): void;
        textLeading(l: number): this;
        textLeading(): number;
        textSize(s: number): p5;
        textSize(): number;
        textStyle(s: string): this;
        textStyle(): p5;
        textAscent(): any;
        textDescent(): any;
    }
 
    interface p5Renderer extends p5RendererPrototype, p5Element {
        canvas: HTMLCanvasElement;
    }
 
    interface p5RendererStatic {
        new (elt: HTMLCanvasElement, pInst: p5, isMainCanvas: boolean): p5Renderer;
        prototype: p5RendererPrototype;
    }
 
    interface p5Renderer2DPrototype extends p5RendererPrototype {
        resize(w: number, h: number): void;
        // color | setting
        background(image?: p5Image): void;
        clear(): void;
        fill(): void;
        stroke(): void;
        // image | loading & displaying
        image(img: any, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void;
        // image | pixels
        blendmode(mode: string): void;
        copy(pInst: p5, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
        copy(sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
        get(x: number, y: number, w: number, h: number): p5Image;
        get(): p5Image;
        get(x: number, y: number): p5Image;
        loadPixels(): void;
        set(x: number, y: number, imgOrCol: (p5Image | number | [number, number, number, number] | p5Color)): void;
        updatePixels(x: number, y: number, w: number, h: number): void;
        // shape | 2d primitives
        arc(x: number, y: number, w: number, h: number, start: number, stop: number, mode: string): this;
        ellipse(x: number, y: number, w: number, h: number): (this | void);
        line(x1: number, y1: number, x2: number, y2: number): this;
        point(x: number, y: number): (this | void);
        quad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): this;
        rect(x: number, y: number, w: number, h: number, tl?: number, tr?: number, br?: number, bl?: number): this;
        triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): (this | void);
        endShape(mode: string, verticles: number[][], isCurve: boolean, isBezier: boolean, isQuadraic: boolean, isContour: boolean, shapeKind?: string): this;
        // shape | attributes
        noSmooth(): this;
        smooth(): this;
        strokeCap(cap: string): this;
        strokeJoin(join: string): this;
        strokeWeight(w: number): this;
        // shape | curves
        bezier(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): this;
        curve(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): this;
        // shape | vertex
        // transform
        applyMatrix(n00: number, n01: number, n02: number, n10: number, n11: number, n12: number): void;
        resetMatrix(): this;
        rotate(r: number): void;
        scale(x: number, y: number): this;
        shearX(angle: number): this;
        shearY(angle: number): this;
        translate(x: number, y: number): this;
        // typography
        text(str: string, x: number, y: number, maxWidth?: number, maxHeight?: number): p5;
        textWidth(s: string): number;
        textAlign(h: string, v: string): p5;
        textAlign(): { horizontal: number, vertical: number };
        // structure
        push(): void;
        pop(): void;
    }
 
    interface p5Renderer2D extends p5Renderer2DPrototype, p5Renderer {
        drawingContext: CanvasRenderingContext2D;
    }
 
    interface p5Renderer2DStatic {
        new (elt: HTMLCanvasElement, pInst: p5, isMainCanvas: boolean): p5Renderer2D;
        prototype: p5Renderer2DPrototype;
    }
 
    interface p5Image { }
 
    interface p5Color { }
 
    interface p5Vector { }
 
    interface p5Static {
        new (sketch: (sketch: p5) => void, node: HTMLElement, sync?: boolean): p5;
        prototype: p5;
        Element: p5ElementStatic;
        Graphics: p5GraphicsStatic;
        Renderer2D: p5Renderer2DStatic;
    }
}
 
declare var p5: p5js.p5Static;