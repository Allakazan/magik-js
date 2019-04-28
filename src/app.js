/*
 * Lightweight JS Image Editor written in pure js

Copyright (c) 2019 Bruno Marques

 */
import MagikJs from './app/Magik'

(function (MagikJs) {
    'use strict';

    // amd
    if (typeof define !== 'undefined' && define.amd) define(function () { return MagikJs; });
    // common js
    if (typeof exports !== 'undefined') exports.MagikJs = MagikJs;
    // browser
    else if (typeof window !== 'undefined') window.MagikJs = MagikJs;
    
})(MagikJs);