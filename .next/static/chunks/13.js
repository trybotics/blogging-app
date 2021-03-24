(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[13],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-chatbot.entry.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-chatbot.entry.js ***!
  \***************************************************************************************/
/*! exports provided: amplify_chatbot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_chatbot", function() { return AmplifyChatbot; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Translations-c833f663.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-c833f663.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/interactions */ "./node_modules/@aws-amplify/interactions/lib-esm/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






// AudioRecorder settings
var RECORDER_EXPORT_MIME_TYPE = 'application/octet-stream';
var DEFAULT_EXPORT_SAMPLE_RATE = 16000;
var FFT_SIZE = 2048; // window size in samples for Fast Fourier Transform (FFT)
var FFT_MAX_DECIBELS = -10; // maximum power value in the scaling range for the FFT analysis data
var FFT_MIN_DECIBELS = -90; // minimum power value in the scaling range for the FFT analysis data
var FFT_SMOOTHING_TIME_CONSTANT = 0.85; // averaging constant with the last analysis frame
/**
 * Merges multiple buffers into one.
 */
var mergeBuffers = function (bufferArray, recLength) {
    var result = new Float32Array(recLength);
    var offset = 0;
    for (var i = 0; i < bufferArray.length; i++) {
        result.set(bufferArray[i], offset);
        offset += bufferArray[i].length;
    }
    return result;
};
/**
 * Downsamples audio to desired export sample rate.
 */
var downsampleBuffer = function (buffer, recordSampleRate, exportSampleRate) {
    if (exportSampleRate === recordSampleRate) {
        return buffer;
    }
    var sampleRateRatio = recordSampleRate / exportSampleRate;
    var newLength = Math.round(buffer.length / sampleRateRatio);
    var result = new Float32Array(newLength);
    var offsetResult = 0;
    var offsetBuffer = 0;
    while (offsetResult < result.length) {
        var nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
        var accum = 0, count = 0;
        for (var i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
            accum += buffer[i];
            count++;
        }
        result[offsetResult] = accum / count;
        offsetResult++;
        offsetBuffer = nextOffsetBuffer;
    }
    return result;
};
/**
 * converts raw audio values to 16 bit pcm.
 */
var floatTo16BitPCM = function (output, offset, input) {
    var byteOffset = offset;
    for (var i = 0; i < input.length; i++, byteOffset += 2) {
        var s = Math.max(-1, Math.min(1, input[i]));
        output.setInt16(byteOffset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
};
/**
 * Write given strings in big-endian order.
 */
var writeString = function (view, offset, string) {
    for (var i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
};
/**
 * Encodes raw pcm audio into a wav file.
 */
var encodeWAV = function (samples, exportSampleRate) {
    /**
     * WAV file consists of three parts: RIFF header, WAVE subchunk, and data subchunk. We precompute the size of them.
     */
    var audioSize = samples.length * 2; // We use 16-bit samples, so we have (2 * sampleLength) bytes.
    var fmtSize = 24; // Byte size of the fmt subchunk: 24 bytes that the audio information that we'll set below.
    var dataSize = 8 + audioSize; // Byte size of the data subchunk: raw sound data plus 8 bytes for the subchunk descriptions.
    var totalByteSize = 12 + fmtSize + dataSize; // Byte size of the whole file, including the chunk header / descriptor.
    // create DataView object to write byte values into
    var buffer = new ArrayBuffer(totalByteSize); // buffer to write the chunk values in.
    var view = new DataView(buffer);
    /**
     * Start writing the .wav file. We write top to bottom, so byte offset (first numeric argument) increases strictly.
     */
    // RIFF header
    writeString(view, 0, 'RIFF'); // At offset 0, write the letters "RIFF"
    view.setUint32(4, fmtSize + dataSize, true); // At offset 4, write the size of fmt and data chunk size combined.
    writeString(view, 8, 'WAVE'); // At offset 8, write the format type "WAVE"
    // fmt subchunk
    writeString(view, 12, 'fmt '); //chunkdId 'fmt '
    view.setUint32(16, fmtSize - 8, true); // fmt subchunk size below this value. We set 8 bytes already, so subtract 8 bytes from fmtSize.
    view.setUint16(20, 1, true); // Audio format code, which is 1 for PCM.
    view.setUint16(22, 1, true); // Number of audio channels. We use mono, ie 1.
    view.setUint32(24, exportSampleRate, true); // Sample rate of the audio file.
    view.setUint32(28, exportSampleRate * 2, true); // Data rate, or # of data bytes per second. Since each sample is 2 bytes, this is 2 * sampleRate.
    view.setUint16(32, 2, true); // block align, # of bytes per sample including all channels, ie. 2 bytes.
    view.setUint16(34, 16, true); // bits per sample, ie. 16 bits
    // data subchunk
    writeString(view, 36, 'data'); // write the chunkId 'data'
    view.setUint32(40, audioSize, true); // Audio byte size
    floatTo16BitPCM(view, 44, samples); // raw pcm values then go here.
    return view;
};
/**
 * Given arrays of raw pcm audio, downsamples the audio to desired sample rate and encodes it to a wav audio file.
 *
 * @param recBuffer {Float32Array[]} - 2d float array containing the recorded raw audio
 * @param recLength {number} - total length of recorded audio
 * @param recordSampleRate {number} - sample rate of the recorded audio
 * @param exportSampleRate {number} - desired sample rate of the exported file
 */
var exportBuffer = function (recBuffer, recLength, recordSampleRate, exportSampleRate) {
    var mergedBuffers = mergeBuffers(recBuffer, recLength);
    var downsampledBuffer = downsampleBuffer(mergedBuffers, recordSampleRate, exportSampleRate);
    var encodedWav = encodeWAV(downsampledBuffer, exportSampleRate);
    var audioBlob = new Blob([encodedWav], {
        type: RECORDER_EXPORT_MIME_TYPE,
    });
    return audioBlob;
};
var logger = new _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["Logger"]('AudioRecorder');
var AudioRecorder = /** @class */ (function () {
    function AudioRecorder(options) {
        // input mic stream is stored in a buffer
        this.streamBuffer = [];
        this.streamBufferLength = 0;
        this.recording = false;
        this.options = options;
    }
    /**
     * This must be called first to enable audio context and request microphone access.
     * Once access granted, it connects all the necessary audio nodes to the context so that it can begin recording or playing.
     */
    AudioRecorder.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["browserOrNode"])().isBrowser) return [3 /*break*/, 2];
                        window.AudioContext = window.AudioContext || window.webkitAudioContext;
                        this.audioContext = new AudioContext();
                        return [4 /*yield*/, navigator.mediaDevices
                                .getUserMedia({ audio: true })
                                .then(function (stream) {
                                _this.audioSupported = true;
                                _this.setupAudioNodes(stream);
                            })
                                .catch(function () {
                                _this.audioSupported = false;
                                return Promise.reject('Audio is not supported');
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.audioSupported = false;
                        return [2 /*return*/, Promise.reject('Audio is not supported')];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Setup audio nodes after successful `init`.
     */
    AudioRecorder.prototype.setupAudioNodes = function (stream) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1, sourceNode, processorNode, analyserNode;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.audioContext.resume()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        logger.error(err_1);
                        return [3 /*break*/, 3];
                    case 3:
                        sourceNode = this.audioContext.createMediaStreamSource(stream);
                        processorNode = this.audioContext.createScriptProcessor(4096, 1, 1);
                        processorNode.onaudioprocess = function (audioProcessingEvent) {
                            if (!_this.recording)
                                return;
                            var stream = audioProcessingEvent.inputBuffer.getChannelData(0);
                            _this.streamBuffer.push(new Float32Array(stream)); // set to a copy of the stream
                            _this.streamBufferLength += stream.length;
                            _this.analyse();
                        };
                        analyserNode = this.audioContext.createAnalyser();
                        analyserNode.minDecibels = FFT_MIN_DECIBELS;
                        analyserNode.maxDecibels = FFT_MAX_DECIBELS;
                        analyserNode.smoothingTimeConstant = FFT_SMOOTHING_TIME_CONSTANT;
                        sourceNode.connect(analyserNode);
                        analyserNode.connect(processorNode);
                        processorNode.connect(sourceNode.context.destination);
                        this.analyserNode = analyserNode;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Start recording audio and listen for silence.
     *
     * @param onSilence {SilenceHandler} - called whenever silence is detected
     * @param visualizer {Visualizer} - called with audio data on each audio process to be used for visualization.
     */
    AudioRecorder.prototype.startRecording = function (onSilence, visualizer) {
        return __awaiter(this, void 0, void 0, function () {
            var context, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.recording || !this.audioSupported)
                            return [2 /*return*/];
                        this.onSilence = onSilence || function () { };
                        this.visualizer = visualizer || function () { };
                        context = this.audioContext;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, context.resume()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        logger.error(err_2);
                        return [3 /*break*/, 4];
                    case 4:
                        this.start = Date.now();
                        this.recording = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Pause recording
     */
    AudioRecorder.prototype.stopRecording = function () {
        if (!this.audioSupported)
            return;
        this.recording = false;
    };
    /**
     * Pause recording and clear audio buffer
     */
    AudioRecorder.prototype.clear = function () {
        this.stopRecording();
        this.streamBufferLength = 0;
        this.streamBuffer = [];
    };
    /**
     * Plays given audioStream with audioContext
     *
     * @param buffer {Uint8Array} - audioStream to be played
     */
    AudioRecorder.prototype.play = function (buffer) {
        var _this = this;
        if (!buffer || !this.audioSupported)
            return;
        var myBlob = new Blob([buffer]);
        return new Promise(function (res, rej) {
            var fileReader = new FileReader();
            fileReader.onload = function () {
                if (_this.playbackSource)
                    _this.playbackSource.disconnect(); // disconnect previous playback source
                _this.playbackSource = _this.audioContext.createBufferSource();
                var successCallback = function (buf) {
                    _this.playbackSource.buffer = buf;
                    _this.playbackSource.connect(_this.audioContext.destination);
                    _this.playbackSource.onended = function () {
                        return res();
                    };
                    _this.playbackSource.start(0);
                };
                var errorCallback = function (err) {
                    return rej(err);
                };
                _this.audioContext.decodeAudioData(fileReader.result, successCallback, errorCallback);
            };
            fileReader.onerror = function () { return rej(); };
            fileReader.readAsArrayBuffer(myBlob);
        });
    };
    /**
     * Stops playing audio if there's a playback source connected.
     */
    AudioRecorder.prototype.stop = function () {
        if (this.playbackSource) {
            this.playbackSource.stop();
        }
    };
    /**
     * Called after each audioProcess. Check for silence and give fft time domain data to visualizer.
     */
    AudioRecorder.prototype.analyse = function () {
        if (!this.audioSupported)
            return;
        var analyser = this.analyserNode;
        analyser.fftSize = FFT_SIZE;
        var bufferLength = analyser.fftSize;
        var dataArray = new Uint8Array(bufferLength);
        var amplitude = this.options.amplitude;
        var time = this.options.time;
        analyser.getByteTimeDomainData(dataArray);
        this.visualizer(dataArray, bufferLength);
        for (var i = 0; i < bufferLength; i++) {
            // Normalize between -1 and 1.
            var curr_value_time = dataArray[i] / 128 - 1.0;
            if (curr_value_time > amplitude || curr_value_time < -1 * amplitude) {
                this.start = Date.now();
            }
        }
        var newtime = Date.now();
        var elapsedTime = newtime - this.start;
        if (elapsedTime > time) {
            this.onSilence();
        }
    };
    /**
     * Encodes recorded buffer to a wav file and exports it to a blob.
     *
     * @param exportSampleRate {number} - desired sample rate of the exported buffer
     */
    AudioRecorder.prototype.exportWAV = function (exportSampleRate) {
        if (exportSampleRate === void 0) { exportSampleRate = DEFAULT_EXPORT_SAMPLE_RATE; }
        return __awaiter(this, void 0, void 0, function () {
            var recordSampleRate, blob;
            return __generator(this, function (_a) {
                if (!this.audioSupported)
                    return [2 /*return*/];
                recordSampleRate = this.audioContext.sampleRate;
                blob = exportBuffer(this.streamBuffer, this.streamBufferLength, recordSampleRate, exportSampleRate);
                this.clear();
                return [2 /*return*/, blob];
            });
        });
    };
    return AudioRecorder;
}());
var visualize = function (dataArray, bufferLength, canvas) {
    if (!canvas)
        return;
    if (!Object(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["browserOrNode"])().isBrowser)
        throw new Error('Visualization is not supported on non-browsers.');
    var _a = canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
    // need to update the default canvas width and height
    canvas.width = width;
    canvas.height = height;
    var canvasCtx = canvas.getContext('2d');
    canvasCtx.fillStyle = 'white';
    canvasCtx.clearRect(0, 0, width, height);
    var draw = function () {
        canvasCtx.fillRect(0, 0, width, height);
        canvasCtx.lineWidth = 1;
        var color = getComputedStyle(document.documentElement).getPropertyValue('--amplify-primary-color');
        canvasCtx.strokeStyle = !color || color === '' ? '#ff9900' : color; // TODO: try separate css variable
        canvasCtx.beginPath();
        var sliceWidth = (width * 1.0) / bufferLength;
        var x = 0;
        for (var i = 0; i < bufferLength || i % 3 === 0; i++) {
            var value = dataArray[i] / 128.0;
            var y = (value * height) / 2;
            if (i === 0) {
                canvasCtx.moveTo(x, y);
            }
            else {
                canvasCtx.lineTo(x, y);
            }
            x += sliceWidth;
        }
        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
    };
    // Register our draw function with requestAnimationFrame.
    requestAnimationFrame(draw);
};
var amplifyChatbotCss = ".bot .dot{background-color:var(--bot-dot-color)}.user .dot{background-color:var(--user-dot-color)}.dot-flashing{width:2.625rem}.dot-flashing .dot{display:inline-block;width:0.625rem;height:0.625rem;border-radius:10rem;opacity:0.65}.dot-flashing .left{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:0s;animation-delay:0s}.dot-flashing .middle{margin-left:0.375rem;margin-right:0.375rem;-webkit-animation:dot-flashing 1s infinite linear alternate;animation:dot-flashing 1s infinite linear alternate;-webkit-animation-delay:0.5s;animation-delay:0.5s}.dot-flashing .right{-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}@keyframes dot-flashing{0%{opacity:0.65}50%,100%{opacity:0.1}}:host{--width:28.75rem;--height:37.5rem;--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--bot-background-color:rgb(230, 230, 230);--bot-text-color:black;--bot-dot-color:var(--bot-text-color);--user-background-color:var(--amplify-blue);--user-text-color:var(--amplify-white);--user-dot-color:var(--user-text-color)}.amplify-chatbot{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--background-color);border-radius:0.375rem;-webkit-box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);box-shadow:0.0625rem 0rem 0.25rem 0 rgba(0, 0, 0, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--amplify-font-family);margin-bottom:1rem;width:100%;height:var(--height);max-width:var(--width)}@media (min-width: 672px){.amplify-chatbot{width:var(--width)}}.header{padding:1.25rem 0.375rem 1.25rem 0.375rem;color:var(--header-color);font-size:var(--header-size);font-weight:bold;text-align:center;word-wrap:break-word}.body{border-top:0.0625rem solid rgba(0, 0, 0, 0.05);padding:1.5rem 1rem 0 1rem;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;overflow:auto}.bubble{max-width:100%;padding:0.8em 1.4em;text-align:left;word-wrap:break-word;margin-bottom:0.625rem}.bot{margin-right:auto;background-color:var(--bot-background-color);color:var(--bot-text-color);border-radius:1.5rem 1.5rem 1.5rem 0}.user{margin-left:auto;background-color:var(--user-background-color);color:var(--user-text-color);border-radius:1.5rem 1.5rem 0 1.5rem}.footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:0.062rem solid rgba(0, 0, 0, 0.05);padding-right:0.625rem;min-height:3.125rem}.footer amplify-input{--border:none;--margin:0;-ms-flex-positive:1;flex-grow:1}canvas{margin-left:0.625rem;margin-right:0.625rem;-ms-flex-positive:1;flex-grow:1;height:3.125rem}.icon-button{--icon-height:1.25rem;--icon-fill:var(--amplify-primary-color);--padding:0.625rem;--width:auto}";
// enum for possible bot states
var ChatState;
(function (ChatState) {
    ChatState[ChatState["Initial"] = 0] = "Initial";
    ChatState[ChatState["Listening"] = 1] = "Listening";
    ChatState[ChatState["SendingText"] = 2] = "SendingText";
    ChatState[ChatState["SendingVoice"] = 3] = "SendingVoice";
    ChatState[ChatState["Error"] = 4] = "Error";
})(ChatState || (ChatState = {}));
// Message types
var MessageFrom;
(function (MessageFrom) {
    MessageFrom["Bot"] = "bot";
    MessageFrom["User"] = "user";
})(MessageFrom || (MessageFrom = {}));
// Error types
var ChatErrorType;
(function (ChatErrorType) {
    ChatErrorType[ChatErrorType["Recoverable"] = 0] = "Recoverable";
    ChatErrorType[ChatErrorType["Unrecoverable"] = 1] = "Unrecoverable";
})(ChatErrorType || (ChatErrorType = {}));
var AmplifyChatbot = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Clear messages when conversation finishes */
        this.clearOnComplete = false;
        /** Continue listening to users after they send the message */
        this.conversationModeOn = false;
        /** Text placed in the top header */
        this.botTitle = _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].CHATBOT_TITLE;
        /** Whether voice chat is enabled */
        this.voiceEnabled = false;
        /** Whether text chat is enabled */
        this.textEnabled = true;
        /** Amount of silence (in ms) to wait for */
        this.silenceTime = 1500;
        /** Noise threshold between -1 and 1. Anything below is considered a silence. */
        this.silenceThreshold = 0.2;
        /** Messages in current session */
        this.messages = [];
        /** Text input box value  */
        this.text = '';
        /** Current app state */
        this.chatState = ChatState.Initial;
        /**
         * Rendering methods
         */
        this.messageJSX = function (messages) {
            var messageList = messages.map(function (message) { return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bubble " + message.from }, message.content); });
            if (_this.chatState === ChatState.SendingText || _this.chatState === ChatState.SendingVoice) {
                // if waiting for voice message, show animation on user side because app is waiting for transcript. Else put it on bot side.
                var client = _this.chatState === ChatState.SendingText ? MessageFrom.Bot : MessageFrom.User;
                messageList.push(Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bubble " + client }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dot-flashing " + client }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "dot left" }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "dot middle" }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "dot right" }))));
            }
            return messageList;
        };
        this.chatCompleted = Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "chatCompleted", 7);
    }
    // Occurs when user presses enter in input box
    class_1.prototype.submitHandler = function (_event) {
        this.sendTextMessage();
    };
    /**
     * Lifecycle functions
     */
    class_1.prototype.componentWillLoad = function () {
        if (!_aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"] || typeof _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"].onComplete !== 'function') {
            throw new Error(_constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_4__["d"]);
        }
        this.validateProps();
    };
    class_1.prototype.componentDidRender = function () {
        // scroll to the bottom if necessary
        var body = this.element.shadowRoot.querySelector('.body');
        body.scrollTop = body.scrollHeight;
    };
    class_1.prototype.validateProps = function () {
        var _this = this;
        if (!this.voiceEnabled && !this.textEnabled) {
            this.setError(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].CHAT_DISABLED_ERROR, ChatErrorType.Unrecoverable);
            return;
        }
        else if (!this.botName) {
            this.setError(_Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].NO_BOT_NAME_ERROR, ChatErrorType.Unrecoverable);
            return;
        }
        if (this.welcomeMessage)
            this.appendToChat(this.welcomeMessage, MessageFrom.Bot);
        // Initialize AudioRecorder if voice is enabled
        if (this.voiceEnabled) {
            this.audioRecorder = new AudioRecorder({
                time: this.silenceTime,
                amplitude: this.silenceThreshold,
            });
            this.audioRecorder.init().catch(function (err) {
                _this.setError(err, ChatErrorType.Recoverable);
            });
        }
        // Callback function to be called after chat is completed
        var onComplete = function (err, data) {
            _this.chatCompleted.emit({
                data: data,
                err: err,
            });
            if (_this.clearOnComplete) {
                _this.reset();
            }
            else {
                _this.chatState = ChatState.Initial;
            }
        };
        try {
            _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"].onComplete(this.botName, onComplete);
        }
        catch (err) {
            this.setError(err, ChatErrorType.Unrecoverable);
        }
    };
    /**
     * Handlers
     */
    class_1.prototype.handleMicButton = function () {
        var _this = this;
        if (this.chatState !== ChatState.Initial)
            return;
        this.audioRecorder.stop();
        this.chatState = ChatState.Listening;
        this.audioRecorder.startRecording(function () { return _this.handleSilence(); }, function (data, length) { return _this.visualizer(data, length); });
    };
    class_1.prototype.handleSilence = function () {
        var _this = this;
        this.chatState = ChatState.SendingVoice;
        this.audioRecorder.stopRecording();
        this.audioRecorder.exportWAV().then(function (blob) {
            _this.sendVoiceMessage(blob);
        });
    };
    class_1.prototype.handleTextChange = function (event) {
        var target = event.target;
        this.text = target.value;
    };
    class_1.prototype.handleCancelButton = function () {
        this.audioRecorder.clear();
        this.chatState = ChatState.Initial;
    };
    class_1.prototype.handleToastClose = function (errorType) {
        this.error = undefined; // clear error
        // if error is recoverable, reset the app state to initial
        if (errorType === ChatErrorType.Recoverable) {
            this.chatState = ChatState.Initial;
        }
    };
    /**
     * Visualization
     */
    class_1.prototype.visualizer = function (dataArray, bufferLength) {
        var canvas = this.element.shadowRoot.querySelector('canvas');
        visualize(dataArray, bufferLength, canvas);
    };
    /**
     * Interactions helpers
     */
    class_1.prototype.sendTextMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var text, response, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.text.length === 0 || this.chatState !== ChatState.Initial)
                            return [2 /*return*/];
                        text = this.text;
                        this.text = '';
                        this.appendToChat(text, MessageFrom.User);
                        this.chatState = ChatState.SendingText;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"].send(this.botName, text)];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        this.setError(err_3, ChatErrorType.Recoverable);
                        return [2 /*return*/];
                    case 4:
                        if (response.message) {
                            this.appendToChat(response.message, MessageFrom.Bot);
                        }
                        this.chatState = ChatState.Initial;
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.sendVoiceMessage = function (audioInput) {
        return __awaiter(this, void 0, void 0, function () {
            var interactionsMessage, response, err_4, dialogState;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        interactionsMessage = {
                            content: audioInput,
                            options: {
                                messageType: 'voice',
                            },
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _aws_amplify_interactions__WEBPACK_IMPORTED_MODULE_5__["Interactions"].send(this.botName, interactionsMessage)];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        this.setError(err_4, ChatErrorType.Recoverable);
                        return [2 /*return*/];
                    case 4:
                        this.chatState = ChatState.Initial;
                        dialogState = response.dialogState;
                        if (response.inputTranscript)
                            this.appendToChat(response.inputTranscript, MessageFrom.User);
                        this.appendToChat(response.message, MessageFrom.Bot);
                        return [4 /*yield*/, this.audioRecorder
                                .play(response.audioStream)
                                .then(function () {
                                // if conversationMode is on, chat is incomplete, and mic button isn't pressed yet, resume listening.
                                if (_this.conversationModeOn &&
                                    dialogState !== 'Fulfilled' &&
                                    dialogState !== 'Failed' &&
                                    _this.chatState === ChatState.Initial) {
                                    _this.handleMicButton();
                                }
                            })
                                .catch(function (err) { return _this.setError(err, ChatErrorType.Recoverable); })];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.appendToChat = function (content, from) {
        this.messages = __spreadArrays(this.messages, [
            {
                content: content,
                from: from,
            },
        ]);
    };
    /**
     * State control methods
     */
    class_1.prototype.setError = function (error, errorType) {
        var message = typeof error === 'string' ? error : error.message;
        this.chatState = ChatState.Error;
        this.error = { message: message, errorType: errorType };
    };
    class_1.prototype.reset = function () {
        this.chatState = ChatState.Initial;
        this.text = '';
        this.error = undefined;
        this.messages = [];
        if (this.welcomeMessage)
            this.appendToChat(this.welcomeMessage, MessageFrom.Bot);
        this.audioRecorder && this.audioRecorder.clear();
    };
    class_1.prototype.listeningFooterJSX = function () {
        var _this = this;
        var visualization = Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("canvas", { height: "50" });
        var cancelButton = (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { "data-test": "chatbot-cancel-button", handleButtonClick: function () { return _this.handleCancelButton(); }, class: "icon-button", variant: "icon", icon: "ban" }));
        return [visualization, cancelButton];
    };
    class_1.prototype.footerJSX = function () {
        var _this = this;
        if (this.chatState === ChatState.Listening)
            return this.listeningFooterJSX();
        var inputPlaceholder = this.textEnabled
            ? _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].TEXT_INPUT_PLACEHOLDER
            : _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_3__["T"].VOICE_INPUT_PLACEHOLDER;
        var textInput = (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-input", { placeholder: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(inputPlaceholder), description: "text", handleInputChange: function (evt) { return _this.handleTextChange(evt); }, value: this.text, disabled: this.chatState === ChatState.Error || !this.textEnabled }));
        var micButton = this.voiceEnabled && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { "data-test": "chatbot-mic-button", handleButtonClick: function () { return _this.handleMicButton(); }, class: "icon-button", variant: "icon", icon: "microphone", disabled: this.chatState === ChatState.Error || this.chatState !== ChatState.Initial }));
        var sendButton = this.textEnabled && (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-button", { "data-test": "chatbot-send-button", class: "icon-button", variant: "icon", icon: "send", handleButtonClick: function () { return _this.sendTextMessage(); }, disabled: this.chatState === ChatState.Error || this.chatState !== ChatState.Initial }));
        return [textInput, micButton, sendButton];
    };
    class_1.prototype.errorToast = function () {
        var _this = this;
        if (!this.error)
            return;
        var _a = this.error, message = _a.message, errorType = _a.errorType;
        return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-toast", { message: _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(message), handleClose: function () { return _this.handleToastClose(errorType); } });
    };
    class_1.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "amplify-chatbot" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "header" }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header", "data-test": "chatbot-header" }, _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__["I18n"].get(this.botTitle))), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "body", "data-test": "chatbot-body" }, this.messageJSX(this.messages)), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer", "data-test": "chatbot-footer" }, this.footerJSX()), this.errorToast())));
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
AmplifyChatbot.style = amplifyChatbotCss;



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS91aS1jb21wb25lbnRzL2Rpc3QvZXNtLWVzNS9hbXBsaWZ5LWNoYXRib3QuZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBLHNCQUFzQixTQUFJLElBQUksU0FBSTtBQUNsQyxpREFBaUQsUUFBUTtBQUN6RCx3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QUFnRixvQ0FBb0MsRUFBRSx1RkFBdUY7QUFDNVEsOENBQThDLDREQUFDLG9CQUFvQixvRUFBb0UsZ0NBQWdDLEVBQUUsbUpBQW1KO0FBQzVULDhDQUE4Qyw0REFBQyxvQkFBb0IsMEhBQTBILGdDQUFnQyxFQUFFLHdGQUF3RjtBQUN2VDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNERBQUMsbUJBQW1CLFVBQVUsc0RBQUkseUNBQXlDLDBDQUEwQyxFQUFFLEVBQUU7QUFDeEk7QUFDQTtBQUNBLGdCQUFnQiw0REFBQyxDQUFDLG9EQUFJLFFBQVEsNERBQUMsU0FBUywyQkFBMkIsRUFBRSw0REFBQyxVQUFVLGlCQUFpQixFQUFFLDREQUFDLFNBQVMsaURBQWlELEVBQUUsc0RBQUksdUJBQXVCLDREQUFDLFNBQVMsNkNBQTZDLG1DQUFtQyw0REFBQyxTQUFTLGlEQUFpRDtBQUNoVjtBQUNBO0FBQ0EsMEJBQTBCLFFBQVEsNERBQVUsT0FBTyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDNkMiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbmltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgaCwgYyBhcyBjcmVhdGVFdmVudCwgSCBhcyBIb3N0LCBnIGFzIGdldEVsZW1lbnQgfSBmcm9tICcuL2luZGV4LTNmYjVjMTM5LmpzJztcbmltcG9ydCB7IExvZ2dlciwgYnJvd3Nlck9yTm9kZSwgSTE4biB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9jb3JlJztcbmltcG9ydCAnQGF3cy1hbXBsaWZ5L2F1dGgnO1xuaW1wb3J0IHsgVCBhcyBUcmFuc2xhdGlvbnMgfSBmcm9tICcuL1RyYW5zbGF0aW9ucy1jODMzZjY2My5qcyc7XG5pbXBvcnQgeyBkIGFzIE5PX0lOVEVSQUNUSU9OU19NT0RVTEVfRk9VTkQgfSBmcm9tICcuL2NvbnN0YW50cy1kMWFiZTdkZS5qcyc7XG5pbXBvcnQgeyBJbnRlcmFjdGlvbnMgfSBmcm9tICdAYXdzLWFtcGxpZnkvaW50ZXJhY3Rpb25zJztcbi8vIEF1ZGlvUmVjb3JkZXIgc2V0dGluZ3NcbnZhciBSRUNPUkRFUl9FWFBPUlRfTUlNRV9UWVBFID0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG52YXIgREVGQVVMVF9FWFBPUlRfU0FNUExFX1JBVEUgPSAxNjAwMDtcbnZhciBGRlRfU0laRSA9IDIwNDg7IC8vIHdpbmRvdyBzaXplIGluIHNhbXBsZXMgZm9yIEZhc3QgRm91cmllciBUcmFuc2Zvcm0gKEZGVClcbnZhciBGRlRfTUFYX0RFQ0lCRUxTID0gLTEwOyAvLyBtYXhpbXVtIHBvd2VyIHZhbHVlIGluIHRoZSBzY2FsaW5nIHJhbmdlIGZvciB0aGUgRkZUIGFuYWx5c2lzIGRhdGFcbnZhciBGRlRfTUlOX0RFQ0lCRUxTID0gLTkwOyAvLyBtaW5pbXVtIHBvd2VyIHZhbHVlIGluIHRoZSBzY2FsaW5nIHJhbmdlIGZvciB0aGUgRkZUIGFuYWx5c2lzIGRhdGFcbnZhciBGRlRfU01PT1RISU5HX1RJTUVfQ09OU1RBTlQgPSAwLjg1OyAvLyBhdmVyYWdpbmcgY29uc3RhbnQgd2l0aCB0aGUgbGFzdCBhbmFseXNpcyBmcmFtZVxuLyoqXG4gKiBNZXJnZXMgbXVsdGlwbGUgYnVmZmVycyBpbnRvIG9uZS5cbiAqL1xudmFyIG1lcmdlQnVmZmVycyA9IGZ1bmN0aW9uIChidWZmZXJBcnJheSwgcmVjTGVuZ3RoKSB7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBGbG9hdDMyQXJyYXkocmVjTGVuZ3RoKTtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1ZmZlckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5zZXQoYnVmZmVyQXJyYXlbaV0sIG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSBidWZmZXJBcnJheVtpXS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiBEb3duc2FtcGxlcyBhdWRpbyB0byBkZXNpcmVkIGV4cG9ydCBzYW1wbGUgcmF0ZS5cbiAqL1xudmFyIGRvd25zYW1wbGVCdWZmZXIgPSBmdW5jdGlvbiAoYnVmZmVyLCByZWNvcmRTYW1wbGVSYXRlLCBleHBvcnRTYW1wbGVSYXRlKSB7XG4gICAgaWYgKGV4cG9ydFNhbXBsZVJhdGUgPT09IHJlY29yZFNhbXBsZVJhdGUpIHtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG4gICAgdmFyIHNhbXBsZVJhdGVSYXRpbyA9IHJlY29yZFNhbXBsZVJhdGUgLyBleHBvcnRTYW1wbGVSYXRlO1xuICAgIHZhciBuZXdMZW5ndGggPSBNYXRoLnJvdW5kKGJ1ZmZlci5sZW5ndGggLyBzYW1wbGVSYXRlUmF0aW8pO1xuICAgIHZhciByZXN1bHQgPSBuZXcgRmxvYXQzMkFycmF5KG5ld0xlbmd0aCk7XG4gICAgdmFyIG9mZnNldFJlc3VsdCA9IDA7XG4gICAgdmFyIG9mZnNldEJ1ZmZlciA9IDA7XG4gICAgd2hpbGUgKG9mZnNldFJlc3VsdCA8IHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG5leHRPZmZzZXRCdWZmZXIgPSBNYXRoLnJvdW5kKChvZmZzZXRSZXN1bHQgKyAxKSAqIHNhbXBsZVJhdGVSYXRpbyk7XG4gICAgICAgIHZhciBhY2N1bSA9IDAsIGNvdW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IG9mZnNldEJ1ZmZlcjsgaSA8IG5leHRPZmZzZXRCdWZmZXIgJiYgaSA8IGJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYWNjdW0gKz0gYnVmZmVyW2ldO1xuICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRbb2Zmc2V0UmVzdWx0XSA9IGFjY3VtIC8gY291bnQ7XG4gICAgICAgIG9mZnNldFJlc3VsdCsrO1xuICAgICAgICBvZmZzZXRCdWZmZXIgPSBuZXh0T2Zmc2V0QnVmZmVyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICogY29udmVydHMgcmF3IGF1ZGlvIHZhbHVlcyB0byAxNiBiaXQgcGNtLlxuICovXG52YXIgZmxvYXRUbzE2Qml0UENNID0gZnVuY3Rpb24gKG91dHB1dCwgb2Zmc2V0LCBpbnB1dCkge1xuICAgIHZhciBieXRlT2Zmc2V0ID0gb2Zmc2V0O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyssIGJ5dGVPZmZzZXQgKz0gMikge1xuICAgICAgICB2YXIgcyA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBpbnB1dFtpXSkpO1xuICAgICAgICBvdXRwdXQuc2V0SW50MTYoYnl0ZU9mZnNldCwgcyA8IDAgPyBzICogMHg4MDAwIDogcyAqIDB4N2ZmZiwgdHJ1ZSk7XG4gICAgfVxufTtcbi8qKlxuICogV3JpdGUgZ2l2ZW4gc3RyaW5ncyBpbiBiaWctZW5kaWFuIG9yZGVyLlxuICovXG52YXIgd3JpdGVTdHJpbmcgPSBmdW5jdGlvbiAodmlldywgb2Zmc2V0LCBzdHJpbmcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2aWV3LnNldFVpbnQ4KG9mZnNldCArIGksIHN0cmluZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG59O1xuLyoqXG4gKiBFbmNvZGVzIHJhdyBwY20gYXVkaW8gaW50byBhIHdhdiBmaWxlLlxuICovXG52YXIgZW5jb2RlV0FWID0gZnVuY3Rpb24gKHNhbXBsZXMsIGV4cG9ydFNhbXBsZVJhdGUpIHtcbiAgICAvKipcbiAgICAgKiBXQVYgZmlsZSBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0czogUklGRiBoZWFkZXIsIFdBVkUgc3ViY2h1bmssIGFuZCBkYXRhIHN1YmNodW5rLiBXZSBwcmVjb21wdXRlIHRoZSBzaXplIG9mIHRoZW0uXG4gICAgICovXG4gICAgdmFyIGF1ZGlvU2l6ZSA9IHNhbXBsZXMubGVuZ3RoICogMjsgLy8gV2UgdXNlIDE2LWJpdCBzYW1wbGVzLCBzbyB3ZSBoYXZlICgyICogc2FtcGxlTGVuZ3RoKSBieXRlcy5cbiAgICB2YXIgZm10U2l6ZSA9IDI0OyAvLyBCeXRlIHNpemUgb2YgdGhlIGZtdCBzdWJjaHVuazogMjQgYnl0ZXMgdGhhdCB0aGUgYXVkaW8gaW5mb3JtYXRpb24gdGhhdCB3ZSdsbCBzZXQgYmVsb3cuXG4gICAgdmFyIGRhdGFTaXplID0gOCArIGF1ZGlvU2l6ZTsgLy8gQnl0ZSBzaXplIG9mIHRoZSBkYXRhIHN1YmNodW5rOiByYXcgc291bmQgZGF0YSBwbHVzIDggYnl0ZXMgZm9yIHRoZSBzdWJjaHVuayBkZXNjcmlwdGlvbnMuXG4gICAgdmFyIHRvdGFsQnl0ZVNpemUgPSAxMiArIGZtdFNpemUgKyBkYXRhU2l6ZTsgLy8gQnl0ZSBzaXplIG9mIHRoZSB3aG9sZSBmaWxlLCBpbmNsdWRpbmcgdGhlIGNodW5rIGhlYWRlciAvIGRlc2NyaXB0b3IuXG4gICAgLy8gY3JlYXRlIERhdGFWaWV3IG9iamVjdCB0byB3cml0ZSBieXRlIHZhbHVlcyBpbnRvXG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcih0b3RhbEJ5dGVTaXplKTsgLy8gYnVmZmVyIHRvIHdyaXRlIHRoZSBjaHVuayB2YWx1ZXMgaW4uXG4gICAgdmFyIHZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyKTtcbiAgICAvKipcbiAgICAgKiBTdGFydCB3cml0aW5nIHRoZSAud2F2IGZpbGUuIFdlIHdyaXRlIHRvcCB0byBib3R0b20sIHNvIGJ5dGUgb2Zmc2V0IChmaXJzdCBudW1lcmljIGFyZ3VtZW50KSBpbmNyZWFzZXMgc3RyaWN0bHkuXG4gICAgICovXG4gICAgLy8gUklGRiBoZWFkZXJcbiAgICB3cml0ZVN0cmluZyh2aWV3LCAwLCAnUklGRicpOyAvLyBBdCBvZmZzZXQgMCwgd3JpdGUgdGhlIGxldHRlcnMgXCJSSUZGXCJcbiAgICB2aWV3LnNldFVpbnQzMig0LCBmbXRTaXplICsgZGF0YVNpemUsIHRydWUpOyAvLyBBdCBvZmZzZXQgNCwgd3JpdGUgdGhlIHNpemUgb2YgZm10IGFuZCBkYXRhIGNodW5rIHNpemUgY29tYmluZWQuXG4gICAgd3JpdGVTdHJpbmcodmlldywgOCwgJ1dBVkUnKTsgLy8gQXQgb2Zmc2V0IDgsIHdyaXRlIHRoZSBmb3JtYXQgdHlwZSBcIldBVkVcIlxuICAgIC8vIGZtdCBzdWJjaHVua1xuICAgIHdyaXRlU3RyaW5nKHZpZXcsIDEyLCAnZm10ICcpOyAvL2NodW5rZElkICdmbXQgJ1xuICAgIHZpZXcuc2V0VWludDMyKDE2LCBmbXRTaXplIC0gOCwgdHJ1ZSk7IC8vIGZtdCBzdWJjaHVuayBzaXplIGJlbG93IHRoaXMgdmFsdWUuIFdlIHNldCA4IGJ5dGVzIGFscmVhZHksIHNvIHN1YnRyYWN0IDggYnl0ZXMgZnJvbSBmbXRTaXplLlxuICAgIHZpZXcuc2V0VWludDE2KDIwLCAxLCB0cnVlKTsgLy8gQXVkaW8gZm9ybWF0IGNvZGUsIHdoaWNoIGlzIDEgZm9yIFBDTS5cbiAgICB2aWV3LnNldFVpbnQxNigyMiwgMSwgdHJ1ZSk7IC8vIE51bWJlciBvZiBhdWRpbyBjaGFubmVscy4gV2UgdXNlIG1vbm8sIGllIDEuXG4gICAgdmlldy5zZXRVaW50MzIoMjQsIGV4cG9ydFNhbXBsZVJhdGUsIHRydWUpOyAvLyBTYW1wbGUgcmF0ZSBvZiB0aGUgYXVkaW8gZmlsZS5cbiAgICB2aWV3LnNldFVpbnQzMigyOCwgZXhwb3J0U2FtcGxlUmF0ZSAqIDIsIHRydWUpOyAvLyBEYXRhIHJhdGUsIG9yICMgb2YgZGF0YSBieXRlcyBwZXIgc2Vjb25kLiBTaW5jZSBlYWNoIHNhbXBsZSBpcyAyIGJ5dGVzLCB0aGlzIGlzIDIgKiBzYW1wbGVSYXRlLlxuICAgIHZpZXcuc2V0VWludDE2KDMyLCAyLCB0cnVlKTsgLy8gYmxvY2sgYWxpZ24sICMgb2YgYnl0ZXMgcGVyIHNhbXBsZSBpbmNsdWRpbmcgYWxsIGNoYW5uZWxzLCBpZS4gMiBieXRlcy5cbiAgICB2aWV3LnNldFVpbnQxNigzNCwgMTYsIHRydWUpOyAvLyBiaXRzIHBlciBzYW1wbGUsIGllLiAxNiBiaXRzXG4gICAgLy8gZGF0YSBzdWJjaHVua1xuICAgIHdyaXRlU3RyaW5nKHZpZXcsIDM2LCAnZGF0YScpOyAvLyB3cml0ZSB0aGUgY2h1bmtJZCAnZGF0YSdcbiAgICB2aWV3LnNldFVpbnQzMig0MCwgYXVkaW9TaXplLCB0cnVlKTsgLy8gQXVkaW8gYnl0ZSBzaXplXG4gICAgZmxvYXRUbzE2Qml0UENNKHZpZXcsIDQ0LCBzYW1wbGVzKTsgLy8gcmF3IHBjbSB2YWx1ZXMgdGhlbiBnbyBoZXJlLlxuICAgIHJldHVybiB2aWV3O1xufTtcbi8qKlxuICogR2l2ZW4gYXJyYXlzIG9mIHJhdyBwY20gYXVkaW8sIGRvd25zYW1wbGVzIHRoZSBhdWRpbyB0byBkZXNpcmVkIHNhbXBsZSByYXRlIGFuZCBlbmNvZGVzIGl0IHRvIGEgd2F2IGF1ZGlvIGZpbGUuXG4gKlxuICogQHBhcmFtIHJlY0J1ZmZlciB7RmxvYXQzMkFycmF5W119IC0gMmQgZmxvYXQgYXJyYXkgY29udGFpbmluZyB0aGUgcmVjb3JkZWQgcmF3IGF1ZGlvXG4gKiBAcGFyYW0gcmVjTGVuZ3RoIHtudW1iZXJ9IC0gdG90YWwgbGVuZ3RoIG9mIHJlY29yZGVkIGF1ZGlvXG4gKiBAcGFyYW0gcmVjb3JkU2FtcGxlUmF0ZSB7bnVtYmVyfSAtIHNhbXBsZSByYXRlIG9mIHRoZSByZWNvcmRlZCBhdWRpb1xuICogQHBhcmFtIGV4cG9ydFNhbXBsZVJhdGUge251bWJlcn0gLSBkZXNpcmVkIHNhbXBsZSByYXRlIG9mIHRoZSBleHBvcnRlZCBmaWxlXG4gKi9cbnZhciBleHBvcnRCdWZmZXIgPSBmdW5jdGlvbiAocmVjQnVmZmVyLCByZWNMZW5ndGgsIHJlY29yZFNhbXBsZVJhdGUsIGV4cG9ydFNhbXBsZVJhdGUpIHtcbiAgICB2YXIgbWVyZ2VkQnVmZmVycyA9IG1lcmdlQnVmZmVycyhyZWNCdWZmZXIsIHJlY0xlbmd0aCk7XG4gICAgdmFyIGRvd25zYW1wbGVkQnVmZmVyID0gZG93bnNhbXBsZUJ1ZmZlcihtZXJnZWRCdWZmZXJzLCByZWNvcmRTYW1wbGVSYXRlLCBleHBvcnRTYW1wbGVSYXRlKTtcbiAgICB2YXIgZW5jb2RlZFdhdiA9IGVuY29kZVdBVihkb3duc2FtcGxlZEJ1ZmZlciwgZXhwb3J0U2FtcGxlUmF0ZSk7XG4gICAgdmFyIGF1ZGlvQmxvYiA9IG5ldyBCbG9iKFtlbmNvZGVkV2F2XSwge1xuICAgICAgICB0eXBlOiBSRUNPUkRFUl9FWFBPUlRfTUlNRV9UWVBFLFxuICAgIH0pO1xuICAgIHJldHVybiBhdWRpb0Jsb2I7XG59O1xudmFyIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0F1ZGlvUmVjb3JkZXInKTtcbnZhciBBdWRpb1JlY29yZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEF1ZGlvUmVjb3JkZXIob3B0aW9ucykge1xuICAgICAgICAvLyBpbnB1dCBtaWMgc3RyZWFtIGlzIHN0b3JlZCBpbiBhIGJ1ZmZlclxuICAgICAgICB0aGlzLnN0cmVhbUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLnN0cmVhbUJ1ZmZlckxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMucmVjb3JkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbXVzdCBiZSBjYWxsZWQgZmlyc3QgdG8gZW5hYmxlIGF1ZGlvIGNvbnRleHQgYW5kIHJlcXVlc3QgbWljcm9waG9uZSBhY2Nlc3MuXG4gICAgICogT25jZSBhY2Nlc3MgZ3JhbnRlZCwgaXQgY29ubmVjdHMgYWxsIHRoZSBuZWNlc3NhcnkgYXVkaW8gbm9kZXMgdG8gdGhlIGNvbnRleHQgc28gdGhhdCBpdCBjYW4gYmVnaW4gcmVjb3JkaW5nIG9yIHBsYXlpbmcuXG4gICAgICovXG4gICAgQXVkaW9SZWNvcmRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnJvd3Nlck9yTm9kZSgpLmlzQnJvd3NlcikgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRVc2VyTWVkaWEoeyBhdWRpbzogdHJ1ZSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoc3RyZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmF1ZGlvU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0dXBBdWRpb05vZGVzKHN0cmVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuYXVkaW9TdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdBdWRpbyBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdWRpb1N1cHBvcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVqZWN0KCdBdWRpbyBpcyBub3Qgc3VwcG9ydGVkJyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXR1cCBhdWRpbyBub2RlcyBhZnRlciBzdWNjZXNzZnVsIGBpbml0YC5cbiAgICAgKi9cbiAgICBBdWRpb1JlY29yZGVyLnByb3RvdHlwZS5zZXR1cEF1ZGlvTm9kZXMgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlcnJfMSwgc291cmNlTm9kZSwgcHJvY2Vzc29yTm9kZSwgYW5hbHlzZXJOb2RlO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmF1ZGlvQ29udGV4dC5yZXN1bWUoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnJfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzb3JOb2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlU2NyaXB0UHJvY2Vzc29yKDQwOTYsIDEsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc29yTm9kZS5vbmF1ZGlvcHJvY2VzcyA9IGZ1bmN0aW9uIChhdWRpb1Byb2Nlc3NpbmdFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMucmVjb3JkaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0cmVhbSA9IGF1ZGlvUHJvY2Vzc2luZ0V2ZW50LmlucHV0QnVmZmVyLmdldENoYW5uZWxEYXRhKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN0cmVhbUJ1ZmZlci5wdXNoKG5ldyBGbG9hdDMyQXJyYXkoc3RyZWFtKSk7IC8vIHNldCB0byBhIGNvcHkgb2YgdGhlIHN0cmVhbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN0cmVhbUJ1ZmZlckxlbmd0aCArPSBzdHJlYW0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmFuYWx5c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmFseXNlck5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHlzZXJOb2RlLm1pbkRlY2liZWxzID0gRkZUX01JTl9ERUNJQkVMUztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuYWx5c2VyTm9kZS5tYXhEZWNpYmVscyA9IEZGVF9NQVhfREVDSUJFTFM7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmFseXNlck5vZGUuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gRkZUX1NNT09USElOR19USU1FX0NPTlNUQU5UO1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlTm9kZS5jb25uZWN0KGFuYWx5c2VyTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmFseXNlck5vZGUuY29ubmVjdChwcm9jZXNzb3JOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3Nvck5vZGUuY29ubmVjdChzb3VyY2VOb2RlLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlck5vZGUgPSBhbmFseXNlck5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3RhcnQgcmVjb3JkaW5nIGF1ZGlvIGFuZCBsaXN0ZW4gZm9yIHNpbGVuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb25TaWxlbmNlIHtTaWxlbmNlSGFuZGxlcn0gLSBjYWxsZWQgd2hlbmV2ZXIgc2lsZW5jZSBpcyBkZXRlY3RlZFxuICAgICAqIEBwYXJhbSB2aXN1YWxpemVyIHtWaXN1YWxpemVyfSAtIGNhbGxlZCB3aXRoIGF1ZGlvIGRhdGEgb24gZWFjaCBhdWRpbyBwcm9jZXNzIHRvIGJlIHVzZWQgZm9yIHZpc3VhbGl6YXRpb24uXG4gICAgICovXG4gICAgQXVkaW9SZWNvcmRlci5wcm90b3R5cGUuc3RhcnRSZWNvcmRpbmcgPSBmdW5jdGlvbiAob25TaWxlbmNlLCB2aXN1YWxpemVyKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0LCBlcnJfMjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlY29yZGluZyB8fCAhdGhpcy5hdWRpb1N1cHBvcnRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2lsZW5jZSA9IG9uU2lsZW5jZSB8fCBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpc3VhbGl6ZXIgPSB2aXN1YWxpemVyIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmF1ZGlvQ29udGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNvbnRleHQucmVzdW1lKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBhdXNlIHJlY29yZGluZ1xuICAgICAqL1xuICAgIEF1ZGlvUmVjb3JkZXIucHJvdG90eXBlLnN0b3BSZWNvcmRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5hdWRpb1N1cHBvcnRlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5yZWNvcmRpbmcgPSBmYWxzZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBhdXNlIHJlY29yZGluZyBhbmQgY2xlYXIgYXVkaW8gYnVmZmVyXG4gICAgICovXG4gICAgQXVkaW9SZWNvcmRlci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcFJlY29yZGluZygpO1xuICAgICAgICB0aGlzLnN0cmVhbUJ1ZmZlckxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuc3RyZWFtQnVmZmVyID0gW107XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQbGF5cyBnaXZlbiBhdWRpb1N0cmVhbSB3aXRoIGF1ZGlvQ29udGV4dFxuICAgICAqXG4gICAgICogQHBhcmFtIGJ1ZmZlciB7VWludDhBcnJheX0gLSBhdWRpb1N0cmVhbSB0byBiZSBwbGF5ZWRcbiAgICAgKi9cbiAgICBBdWRpb1JlY29yZGVyLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIWJ1ZmZlciB8fCAhdGhpcy5hdWRpb1N1cHBvcnRlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIG15QmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXMsIHJlaikge1xuICAgICAgICAgICAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnBsYXliYWNrU291cmNlKVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5YmFja1NvdXJjZS5kaXNjb25uZWN0KCk7IC8vIGRpc2Nvbm5lY3QgcHJldmlvdXMgcGxheWJhY2sgc291cmNlXG4gICAgICAgICAgICAgICAgX3RoaXMucGxheWJhY2tTb3VyY2UgPSBfdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NDYWxsYmFjayA9IGZ1bmN0aW9uIChidWYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGxheWJhY2tTb3VyY2UuYnVmZmVyID0gYnVmO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5YmFja1NvdXJjZS5jb25uZWN0KF90aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsYXliYWNrU291cmNlLm9uZW5kZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsYXliYWNrU291cmNlLnN0YXJ0KDApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWooZXJyKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzLmF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEoZmlsZVJlYWRlci5yZXN1bHQsIHN1Y2Nlc3NDYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZmlsZVJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVqKCk7IH07XG4gICAgICAgICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKG15QmxvYik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3RvcHMgcGxheWluZyBhdWRpbyBpZiB0aGVyZSdzIGEgcGxheWJhY2sgc291cmNlIGNvbm5lY3RlZC5cbiAgICAgKi9cbiAgICBBdWRpb1JlY29yZGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5wbGF5YmFja1NvdXJjZSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5YmFja1NvdXJjZS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCBhZnRlciBlYWNoIGF1ZGlvUHJvY2Vzcy4gQ2hlY2sgZm9yIHNpbGVuY2UgYW5kIGdpdmUgZmZ0IHRpbWUgZG9tYWluIGRhdGEgdG8gdmlzdWFsaXplci5cbiAgICAgKi9cbiAgICBBdWRpb1JlY29yZGVyLnByb3RvdHlwZS5hbmFseXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuYXVkaW9TdXBwb3J0ZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBhbmFseXNlciA9IHRoaXMuYW5hbHlzZXJOb2RlO1xuICAgICAgICBhbmFseXNlci5mZnRTaXplID0gRkZUX1NJWkU7XG4gICAgICAgIHZhciBidWZmZXJMZW5ndGggPSBhbmFseXNlci5mZnRTaXplO1xuICAgICAgICB2YXIgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcbiAgICAgICAgdmFyIGFtcGxpdHVkZSA9IHRoaXMub3B0aW9ucy5hbXBsaXR1ZGU7XG4gICAgICAgIHZhciB0aW1lID0gdGhpcy5vcHRpb25zLnRpbWU7XG4gICAgICAgIGFuYWx5c2VyLmdldEJ5dGVUaW1lRG9tYWluRGF0YShkYXRhQXJyYXkpO1xuICAgICAgICB0aGlzLnZpc3VhbGl6ZXIoZGF0YUFycmF5LCBidWZmZXJMZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1ZmZlckxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBOb3JtYWxpemUgYmV0d2VlbiAtMSBhbmQgMS5cbiAgICAgICAgICAgIHZhciBjdXJyX3ZhbHVlX3RpbWUgPSBkYXRhQXJyYXlbaV0gLyAxMjggLSAxLjA7XG4gICAgICAgICAgICBpZiAoY3Vycl92YWx1ZV90aW1lID4gYW1wbGl0dWRlIHx8IGN1cnJfdmFsdWVfdGltZSA8IC0xICogYW1wbGl0dWRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5ld3RpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgZWxhcHNlZFRpbWUgPSBuZXd0aW1lIC0gdGhpcy5zdGFydDtcbiAgICAgICAgaWYgKGVsYXBzZWRUaW1lID4gdGltZSkge1xuICAgICAgICAgICAgdGhpcy5vblNpbGVuY2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRW5jb2RlcyByZWNvcmRlZCBidWZmZXIgdG8gYSB3YXYgZmlsZSBhbmQgZXhwb3J0cyBpdCB0byBhIGJsb2IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXhwb3J0U2FtcGxlUmF0ZSB7bnVtYmVyfSAtIGRlc2lyZWQgc2FtcGxlIHJhdGUgb2YgdGhlIGV4cG9ydGVkIGJ1ZmZlclxuICAgICAqL1xuICAgIEF1ZGlvUmVjb3JkZXIucHJvdG90eXBlLmV4cG9ydFdBViA9IGZ1bmN0aW9uIChleHBvcnRTYW1wbGVSYXRlKSB7XG4gICAgICAgIGlmIChleHBvcnRTYW1wbGVSYXRlID09PSB2b2lkIDApIHsgZXhwb3J0U2FtcGxlUmF0ZSA9IERFRkFVTFRfRVhQT1JUX1NBTVBMRV9SQVRFOyB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZWNvcmRTYW1wbGVSYXRlLCBibG9iO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdWRpb1N1cHBvcnRlZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIHJlY29yZFNhbXBsZVJhdGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5zYW1wbGVSYXRlO1xuICAgICAgICAgICAgICAgIGJsb2IgPSBleHBvcnRCdWZmZXIodGhpcy5zdHJlYW1CdWZmZXIsIHRoaXMuc3RyZWFtQnVmZmVyTGVuZ3RoLCByZWNvcmRTYW1wbGVSYXRlLCBleHBvcnRTYW1wbGVSYXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGJsb2JdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEF1ZGlvUmVjb3JkZXI7XG59KCkpO1xudmFyIHZpc3VhbGl6ZSA9IGZ1bmN0aW9uIChkYXRhQXJyYXksIGJ1ZmZlckxlbmd0aCwgY2FudmFzKSB7XG4gICAgaWYgKCFjYW52YXMpXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoIWJyb3dzZXJPck5vZGUoKS5pc0Jyb3dzZXIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVmlzdWFsaXphdGlvbiBpcyBub3Qgc3VwcG9ydGVkIG9uIG5vbi1icm93c2Vycy4nKTtcbiAgICB2YXIgX2EgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHdpZHRoID0gX2Eud2lkdGgsIGhlaWdodCA9IF9hLmhlaWdodDtcbiAgICAvLyBuZWVkIHRvIHVwZGF0ZSB0aGUgZGVmYXVsdCBjYW52YXMgd2lkdGggYW5kIGhlaWdodFxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdmFyIGNhbnZhc0N0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNhbnZhc0N0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGNhbnZhc0N0eC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgdmFyIGRyYXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbnZhc0N0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY2FudmFzQ3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIHZhciBjb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWFtcGxpZnktcHJpbWFyeS1jb2xvcicpO1xuICAgICAgICBjYW52YXNDdHguc3Ryb2tlU3R5bGUgPSAhY29sb3IgfHwgY29sb3IgPT09ICcnID8gJyNmZjk5MDAnIDogY29sb3I7IC8vIFRPRE86IHRyeSBzZXBhcmF0ZSBjc3MgdmFyaWFibGVcbiAgICAgICAgY2FudmFzQ3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB2YXIgc2xpY2VXaWR0aCA9ICh3aWR0aCAqIDEuMCkgLyBidWZmZXJMZW5ndGg7XG4gICAgICAgIHZhciB4ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWZmZXJMZW5ndGggfHwgaSAlIDMgPT09IDA7IGkrKykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YUFycmF5W2ldIC8gMTI4LjA7XG4gICAgICAgICAgICB2YXIgeSA9ICh2YWx1ZSAqIGhlaWdodCkgLyAyO1xuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBjYW52YXNDdHgubW92ZVRvKHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FudmFzQ3R4LmxpbmVUbyh4LCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHggKz0gc2xpY2VXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXNDdHgubGluZVRvKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICBjYW52YXNDdHguc3Ryb2tlKCk7XG4gICAgfTtcbiAgICAvLyBSZWdpc3RlciBvdXIgZHJhdyBmdW5jdGlvbiB3aXRoIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG59O1xudmFyIGFtcGxpZnlDaGF0Ym90Q3NzID0gXCIuYm90IC5kb3R7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ib3QtZG90LWNvbG9yKX0udXNlciAuZG90e2JhY2tncm91bmQtY29sb3I6dmFyKC0tdXNlci1kb3QtY29sb3IpfS5kb3QtZmxhc2hpbmd7d2lkdGg6Mi42MjVyZW19LmRvdC1mbGFzaGluZyAuZG90e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjAuNjI1cmVtO2hlaWdodDowLjYyNXJlbTtib3JkZXItcmFkaXVzOjEwcmVtO29wYWNpdHk6MC42NX0uZG90LWZsYXNoaW5nIC5sZWZ0ey13ZWJraXQtYW5pbWF0aW9uOmRvdC1mbGFzaGluZyAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7YW5pbWF0aW9uOmRvdC1mbGFzaGluZyAxcyBpbmZpbml0ZSBhbHRlcm5hdGU7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MHM7YW5pbWF0aW9uLWRlbGF5OjBzfS5kb3QtZmxhc2hpbmcgLm1pZGRsZXttYXJnaW4tbGVmdDowLjM3NXJlbTttYXJnaW4tcmlnaHQ6MC4zNzVyZW07LXdlYmtpdC1hbmltYXRpb246ZG90LWZsYXNoaW5nIDFzIGluZmluaXRlIGxpbmVhciBhbHRlcm5hdGU7YW5pbWF0aW9uOmRvdC1mbGFzaGluZyAxcyBpbmZpbml0ZSBsaW5lYXIgYWx0ZXJuYXRlOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjAuNXM7YW5pbWF0aW9uLWRlbGF5OjAuNXN9LmRvdC1mbGFzaGluZyAucmlnaHR7LXdlYmtpdC1hbmltYXRpb246ZG90LWZsYXNoaW5nIDFzIGluZmluaXRlIGFsdGVybmF0ZTthbmltYXRpb246ZG90LWZsYXNoaW5nIDFzIGluZmluaXRlIGFsdGVybmF0ZTstd2Via2l0LWFuaW1hdGlvbi1kZWxheToxczthbmltYXRpb24tZGVsYXk6MXN9QC13ZWJraXQta2V5ZnJhbWVzIGRvdC1mbGFzaGluZ3swJXtvcGFjaXR5OjAuNjV9NTAlLDEwMCV7b3BhY2l0eTowLjF9fUBrZXlmcmFtZXMgZG90LWZsYXNoaW5nezAle29wYWNpdHk6MC42NX01MCUsMTAwJXtvcGFjaXR5OjAuMX19Omhvc3R7LS13aWR0aDoyOC43NXJlbTstLWhlaWdodDozNy41cmVtOy0taGVhZGVyLWNvbG9yOnZhcigtLWFtcGxpZnktc2Vjb25kYXJ5LWNvbG9yKTstLWhlYWRlci1zaXplOnZhcigtLWFtcGxpZnktdGV4dC1sZyk7LS1ib3QtYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMwLCAyMzAsIDIzMCk7LS1ib3QtdGV4dC1jb2xvcjpibGFjazstLWJvdC1kb3QtY29sb3I6dmFyKC0tYm90LXRleHQtY29sb3IpOy0tdXNlci1iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFtcGxpZnktYmx1ZSk7LS11c2VyLXRleHQtY29sb3I6dmFyKC0tYW1wbGlmeS13aGl0ZSk7LS11c2VyLWRvdC1jb2xvcjp2YXIoLS11c2VyLXRleHQtY29sb3IpfS5hbXBsaWZ5LWNoYXRib3R7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhY2tncm91bmQtY29sb3IpO2JvcmRlci1yYWRpdXM6MC4zNzVyZW07LXdlYmtpdC1ib3gtc2hhZG93OjAuMDYyNXJlbSAwcmVtIDAuMjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMTUpO2JveC1zaGFkb3c6MC4wNjI1cmVtIDByZW0gMC4yNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtZmFtaWx5OnZhcigtLWFtcGxpZnktZm9udC1mYW1pbHkpO21hcmdpbi1ib3R0b206MXJlbTt3aWR0aDoxMDAlO2hlaWdodDp2YXIoLS1oZWlnaHQpO21heC13aWR0aDp2YXIoLS13aWR0aCl9QG1lZGlhIChtaW4td2lkdGg6IDY3MnB4KXsuYW1wbGlmeS1jaGF0Ym90e3dpZHRoOnZhcigtLXdpZHRoKX19LmhlYWRlcntwYWRkaW5nOjEuMjVyZW0gMC4zNzVyZW0gMS4yNXJlbSAwLjM3NXJlbTtjb2xvcjp2YXIoLS1oZWFkZXItY29sb3IpO2ZvbnQtc2l6ZTp2YXIoLS1oZWFkZXItc2l6ZSk7Zm9udC13ZWlnaHQ6Ym9sZDt0ZXh0LWFsaWduOmNlbnRlcjt3b3JkLXdyYXA6YnJlYWstd29yZH0uYm9keXtib3JkZXItdG9wOjAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO3BhZGRpbmc6MS41cmVtIDFyZW0gMCAxcmVtO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47b3ZlcmZsb3c6YXV0b30uYnViYmxle21heC13aWR0aDoxMDAlO3BhZGRpbmc6MC44ZW0gMS40ZW07dGV4dC1hbGlnbjpsZWZ0O3dvcmQtd3JhcDpicmVhay13b3JkO21hcmdpbi1ib3R0b206MC42MjVyZW19LmJvdHttYXJnaW4tcmlnaHQ6YXV0bztiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJvdC1iYWNrZ3JvdW5kLWNvbG9yKTtjb2xvcjp2YXIoLS1ib3QtdGV4dC1jb2xvcik7Ym9yZGVyLXJhZGl1czoxLjVyZW0gMS41cmVtIDEuNXJlbSAwfS51c2Vye21hcmdpbi1sZWZ0OmF1dG87YmFja2dyb3VuZC1jb2xvcjp2YXIoLS11c2VyLWJhY2tncm91bmQtY29sb3IpO2NvbG9yOnZhcigtLXVzZXItdGV4dC1jb2xvcik7Ym9yZGVyLXJhZGl1czoxLjVyZW0gMS41cmVtIDAgMS41cmVtfS5mb290ZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItdG9wOjAuMDYycmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7cGFkZGluZy1yaWdodDowLjYyNXJlbTttaW4taGVpZ2h0OjMuMTI1cmVtfS5mb290ZXIgYW1wbGlmeS1pbnB1dHstLWJvcmRlcjpub25lOy0tbWFyZ2luOjA7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MX1jYW52YXN7bWFyZ2luLWxlZnQ6MC42MjVyZW07bWFyZ2luLXJpZ2h0OjAuNjI1cmVtOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7aGVpZ2h0OjMuMTI1cmVtfS5pY29uLWJ1dHRvbnstLWljb24taGVpZ2h0OjEuMjVyZW07LS1pY29uLWZpbGw6dmFyKC0tYW1wbGlmeS1wcmltYXJ5LWNvbG9yKTstLXBhZGRpbmc6MC42MjVyZW07LS13aWR0aDphdXRvfVwiO1xuLy8gZW51bSBmb3IgcG9zc2libGUgYm90IHN0YXRlc1xudmFyIENoYXRTdGF0ZTtcbihmdW5jdGlvbiAoQ2hhdFN0YXRlKSB7XG4gICAgQ2hhdFN0YXRlW0NoYXRTdGF0ZVtcIkluaXRpYWxcIl0gPSAwXSA9IFwiSW5pdGlhbFwiO1xuICAgIENoYXRTdGF0ZVtDaGF0U3RhdGVbXCJMaXN0ZW5pbmdcIl0gPSAxXSA9IFwiTGlzdGVuaW5nXCI7XG4gICAgQ2hhdFN0YXRlW0NoYXRTdGF0ZVtcIlNlbmRpbmdUZXh0XCJdID0gMl0gPSBcIlNlbmRpbmdUZXh0XCI7XG4gICAgQ2hhdFN0YXRlW0NoYXRTdGF0ZVtcIlNlbmRpbmdWb2ljZVwiXSA9IDNdID0gXCJTZW5kaW5nVm9pY2VcIjtcbiAgICBDaGF0U3RhdGVbQ2hhdFN0YXRlW1wiRXJyb3JcIl0gPSA0XSA9IFwiRXJyb3JcIjtcbn0pKENoYXRTdGF0ZSB8fCAoQ2hhdFN0YXRlID0ge30pKTtcbi8vIE1lc3NhZ2UgdHlwZXNcbnZhciBNZXNzYWdlRnJvbTtcbihmdW5jdGlvbiAoTWVzc2FnZUZyb20pIHtcbiAgICBNZXNzYWdlRnJvbVtcIkJvdFwiXSA9IFwiYm90XCI7XG4gICAgTWVzc2FnZUZyb21bXCJVc2VyXCJdID0gXCJ1c2VyXCI7XG59KShNZXNzYWdlRnJvbSB8fCAoTWVzc2FnZUZyb20gPSB7fSkpO1xuLy8gRXJyb3IgdHlwZXNcbnZhciBDaGF0RXJyb3JUeXBlO1xuKGZ1bmN0aW9uIChDaGF0RXJyb3JUeXBlKSB7XG4gICAgQ2hhdEVycm9yVHlwZVtDaGF0RXJyb3JUeXBlW1wiUmVjb3ZlcmFibGVcIl0gPSAwXSA9IFwiUmVjb3ZlcmFibGVcIjtcbiAgICBDaGF0RXJyb3JUeXBlW0NoYXRFcnJvclR5cGVbXCJVbnJlY292ZXJhYmxlXCJdID0gMV0gPSBcIlVucmVjb3ZlcmFibGVcIjtcbn0pKENoYXRFcnJvclR5cGUgfHwgKENoYXRFcnJvclR5cGUgPSB7fSkpO1xudmFyIEFtcGxpZnlDaGF0Ym90ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNsYXNzXzEoaG9zdFJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZWdpc3Rlckluc3RhbmNlKHRoaXMsIGhvc3RSZWYpO1xuICAgICAgICAvKiogQ2xlYXIgbWVzc2FnZXMgd2hlbiBjb252ZXJzYXRpb24gZmluaXNoZXMgKi9cbiAgICAgICAgdGhpcy5jbGVhck9uQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgLyoqIENvbnRpbnVlIGxpc3RlbmluZyB0byB1c2VycyBhZnRlciB0aGV5IHNlbmQgdGhlIG1lc3NhZ2UgKi9cbiAgICAgICAgdGhpcy5jb252ZXJzYXRpb25Nb2RlT24gPSBmYWxzZTtcbiAgICAgICAgLyoqIFRleHQgcGxhY2VkIGluIHRoZSB0b3AgaGVhZGVyICovXG4gICAgICAgIHRoaXMuYm90VGl0bGUgPSBUcmFuc2xhdGlvbnMuQ0hBVEJPVF9USVRMRTtcbiAgICAgICAgLyoqIFdoZXRoZXIgdm9pY2UgY2hhdCBpcyBlbmFibGVkICovXG4gICAgICAgIHRoaXMudm9pY2VFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKiBXaGV0aGVyIHRleHQgY2hhdCBpcyBlbmFibGVkICovXG4gICAgICAgIHRoaXMudGV4dEVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvKiogQW1vdW50IG9mIHNpbGVuY2UgKGluIG1zKSB0byB3YWl0IGZvciAqL1xuICAgICAgICB0aGlzLnNpbGVuY2VUaW1lID0gMTUwMDtcbiAgICAgICAgLyoqIE5vaXNlIHRocmVzaG9sZCBiZXR3ZWVuIC0xIGFuZCAxLiBBbnl0aGluZyBiZWxvdyBpcyBjb25zaWRlcmVkIGEgc2lsZW5jZS4gKi9cbiAgICAgICAgdGhpcy5zaWxlbmNlVGhyZXNob2xkID0gMC4yO1xuICAgICAgICAvKiogTWVzc2FnZXMgaW4gY3VycmVudCBzZXNzaW9uICovXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgICAgICAgLyoqIFRleHQgaW5wdXQgYm94IHZhbHVlICAqL1xuICAgICAgICB0aGlzLnRleHQgPSAnJztcbiAgICAgICAgLyoqIEN1cnJlbnQgYXBwIHN0YXRlICovXG4gICAgICAgIHRoaXMuY2hhdFN0YXRlID0gQ2hhdFN0YXRlLkluaXRpYWw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW5kZXJpbmcgbWV0aG9kc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tZXNzYWdlSlNYID0gZnVuY3Rpb24gKG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZUxpc3QgPSBtZXNzYWdlcy5tYXAoZnVuY3Rpb24gKG1lc3NhZ2UpIHsgcmV0dXJuIGgoXCJkaXZcIiwgeyBjbGFzczogXCJidWJibGUgXCIgKyBtZXNzYWdlLmZyb20gfSwgbWVzc2FnZS5jb250ZW50KTsgfSk7XG4gICAgICAgICAgICBpZiAoX3RoaXMuY2hhdFN0YXRlID09PSBDaGF0U3RhdGUuU2VuZGluZ1RleHQgfHwgX3RoaXMuY2hhdFN0YXRlID09PSBDaGF0U3RhdGUuU2VuZGluZ1ZvaWNlKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2FpdGluZyBmb3Igdm9pY2UgbWVzc2FnZSwgc2hvdyBhbmltYXRpb24gb24gdXNlciBzaWRlIGJlY2F1c2UgYXBwIGlzIHdhaXRpbmcgZm9yIHRyYW5zY3JpcHQuIEVsc2UgcHV0IGl0IG9uIGJvdCBzaWRlLlxuICAgICAgICAgICAgICAgIHZhciBjbGllbnQgPSBfdGhpcy5jaGF0U3RhdGUgPT09IENoYXRTdGF0ZS5TZW5kaW5nVGV4dCA/IE1lc3NhZ2VGcm9tLkJvdCA6IE1lc3NhZ2VGcm9tLlVzZXI7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUxpc3QucHVzaChoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYnViYmxlIFwiICsgY2xpZW50IH0sIGgoXCJkaXZcIiwgeyBjbGFzczogXCJkb3QtZmxhc2hpbmcgXCIgKyBjbGllbnQgfSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJkb3QgbGVmdFwiIH0pLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcImRvdCBtaWRkbGVcIiB9KSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJkb3QgcmlnaHRcIiB9KSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlTGlzdDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jaGF0Q29tcGxldGVkID0gY3JlYXRlRXZlbnQodGhpcywgXCJjaGF0Q29tcGxldGVkXCIsIDcpO1xuICAgIH1cbiAgICAvLyBPY2N1cnMgd2hlbiB1c2VyIHByZXNzZXMgZW50ZXIgaW4gaW5wdXQgYm94XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc3VibWl0SGFuZGxlciA9IGZ1bmN0aW9uIChfZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZW5kVGV4dE1lc3NhZ2UoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIExpZmVjeWNsZSBmdW5jdGlvbnNcbiAgICAgKi9cbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFJbnRlcmFjdGlvbnMgfHwgdHlwZW9mIEludGVyYWN0aW9ucy5vbkNvbXBsZXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTk9fSU5URVJBQ1RJT05TX01PRFVMRV9GT1VORCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWxpZGF0ZVByb3BzKCk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5jb21wb25lbnREaWRSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHNjcm9sbCB0byB0aGUgYm90dG9tIGlmIG5lY2Vzc2FyeVxuICAgICAgICB2YXIgYm9keSA9IHRoaXMuZWxlbWVudC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5Jyk7XG4gICAgICAgIGJvZHkuc2Nyb2xsVG9wID0gYm9keS5zY3JvbGxIZWlnaHQ7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS52YWxpZGF0ZVByb3BzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMudm9pY2VFbmFibGVkICYmICF0aGlzLnRleHRFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldEVycm9yKFRyYW5zbGF0aW9ucy5DSEFUX0RJU0FCTEVEX0VSUk9SLCBDaGF0RXJyb3JUeXBlLlVucmVjb3ZlcmFibGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmJvdE5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RXJyb3IoVHJhbnNsYXRpb25zLk5PX0JPVF9OQU1FX0VSUk9SLCBDaGF0RXJyb3JUeXBlLlVucmVjb3ZlcmFibGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLndlbGNvbWVNZXNzYWdlKVxuICAgICAgICAgICAgdGhpcy5hcHBlbmRUb0NoYXQodGhpcy53ZWxjb21lTWVzc2FnZSwgTWVzc2FnZUZyb20uQm90KTtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBBdWRpb1JlY29yZGVyIGlmIHZvaWNlIGlzIGVuYWJsZWRcbiAgICAgICAgaWYgKHRoaXMudm9pY2VFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIgPSBuZXcgQXVkaW9SZWNvcmRlcih7XG4gICAgICAgICAgICAgICAgdGltZTogdGhpcy5zaWxlbmNlVGltZSxcbiAgICAgICAgICAgICAgICBhbXBsaXR1ZGU6IHRoaXMuc2lsZW5jZVRocmVzaG9sZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hdWRpb1JlY29yZGVyLmluaXQoKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0RXJyb3IoZXJyLCBDaGF0RXJyb3JUeXBlLlJlY292ZXJhYmxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBhZnRlciBjaGF0IGlzIGNvbXBsZXRlZFxuICAgICAgICB2YXIgb25Db21wbGV0ZSA9IGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgICAgIF90aGlzLmNoYXRDb21wbGV0ZWQuZW1pdCh7XG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICBlcnI6IGVycixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKF90aGlzLmNsZWFyT25Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGF0U3RhdGUgPSBDaGF0U3RhdGUuSW5pdGlhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEludGVyYWN0aW9ucy5vbkNvbXBsZXRlKHRoaXMuYm90TmFtZSwgb25Db21wbGV0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5zZXRFcnJvcihlcnIsIENoYXRFcnJvclR5cGUuVW5yZWNvdmVyYWJsZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXJzXG4gICAgICovXG4gICAgY2xhc3NfMS5wcm90b3R5cGUuaGFuZGxlTWljQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5jaGF0U3RhdGUgIT09IENoYXRTdGF0ZS5Jbml0aWFsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIuc3RvcCgpO1xuICAgICAgICB0aGlzLmNoYXRTdGF0ZSA9IENoYXRTdGF0ZS5MaXN0ZW5pbmc7XG4gICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlci5zdGFydFJlY29yZGluZyhmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVTaWxlbmNlKCk7IH0sIGZ1bmN0aW9uIChkYXRhLCBsZW5ndGgpIHsgcmV0dXJuIF90aGlzLnZpc3VhbGl6ZXIoZGF0YSwgbGVuZ3RoKTsgfSk7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5oYW5kbGVTaWxlbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNoYXRTdGF0ZSA9IENoYXRTdGF0ZS5TZW5kaW5nVm9pY2U7XG4gICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlci5zdG9wUmVjb3JkaW5nKCk7XG4gICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlci5leHBvcnRXQVYoKS50aGVuKGZ1bmN0aW9uIChibG9iKSB7XG4gICAgICAgICAgICBfdGhpcy5zZW5kVm9pY2VNZXNzYWdlKGJsb2IpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmhhbmRsZVRleHRDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGFyZ2V0LnZhbHVlO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuaGFuZGxlQ2FuY2VsQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmF1ZGlvUmVjb3JkZXIuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5jaGF0U3RhdGUgPSBDaGF0U3RhdGUuSW5pdGlhbDtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmhhbmRsZVRvYXN0Q2xvc2UgPSBmdW5jdGlvbiAoZXJyb3JUeXBlKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSB1bmRlZmluZWQ7IC8vIGNsZWFyIGVycm9yXG4gICAgICAgIC8vIGlmIGVycm9yIGlzIHJlY292ZXJhYmxlLCByZXNldCB0aGUgYXBwIHN0YXRlIHRvIGluaXRpYWxcbiAgICAgICAgaWYgKGVycm9yVHlwZSA9PT0gQ2hhdEVycm9yVHlwZS5SZWNvdmVyYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5jaGF0U3RhdGUgPSBDaGF0U3RhdGUuSW5pdGlhbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVmlzdWFsaXphdGlvblxuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnZpc3VhbGl6ZXIgPSBmdW5jdGlvbiAoZGF0YUFycmF5LCBidWZmZXJMZW5ndGgpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZWxlbWVudC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuICAgICAgICB2aXN1YWxpemUoZGF0YUFycmF5LCBidWZmZXJMZW5ndGgsIGNhbnZhcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnRlcmFjdGlvbnMgaGVscGVyc1xuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNlbmRUZXh0TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRleHQsIHJlc3BvbnNlLCBlcnJfMztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID09PSAwIHx8IHRoaXMuY2hhdFN0YXRlICE9PSBDaGF0U3RhdGUuSW5pdGlhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZFRvQ2hhdCh0ZXh0LCBNZXNzYWdlRnJvbS5Vc2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhdFN0YXRlID0gQ2hhdFN0YXRlLlNlbmRpbmdUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgSW50ZXJhY3Rpb25zLnNlbmQodGhpcy5ib3ROYW1lLCB0ZXh0KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycl8zID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvcihlcnJfMywgQ2hhdEVycm9yVHlwZS5SZWNvdmVyYWJsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRUb0NoYXQocmVzcG9uc2UubWVzc2FnZSwgTWVzc2FnZUZyb20uQm90KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhdFN0YXRlID0gQ2hhdFN0YXRlLkluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuc2VuZFZvaWNlTWVzc2FnZSA9IGZ1bmN0aW9uIChhdWRpb0lucHV0KSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcmFjdGlvbnNNZXNzYWdlLCByZXNwb25zZSwgZXJyXzQsIGRpYWxvZ1N0YXRlO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uc01lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYXVkaW9JbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiAndm9pY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgSW50ZXJhY3Rpb25zLnNlbmQodGhpcy5ib3ROYW1lLCBpbnRlcmFjdGlvbnNNZXNzYWdlKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycl80ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFcnJvcihlcnJfNCwgQ2hhdEVycm9yVHlwZS5SZWNvdmVyYWJsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhdFN0YXRlID0gQ2hhdFN0YXRlLkluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dTdGF0ZSA9IHJlc3BvbnNlLmRpYWxvZ1N0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmlucHV0VHJhbnNjcmlwdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZFRvQ2hhdChyZXNwb25zZS5pbnB1dFRyYW5zY3JpcHQsIE1lc3NhZ2VGcm9tLlVzZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRUb0NoYXQocmVzcG9uc2UubWVzc2FnZSwgTWVzc2FnZUZyb20uQm90KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuYXVkaW9SZWNvcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGxheShyZXNwb25zZS5hdWRpb1N0cmVhbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBjb252ZXJzYXRpb25Nb2RlIGlzIG9uLCBjaGF0IGlzIGluY29tcGxldGUsIGFuZCBtaWMgYnV0dG9uIGlzbid0IHByZXNzZWQgeWV0LCByZXN1bWUgbGlzdGVuaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29udmVyc2F0aW9uTW9kZU9uICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dTdGF0ZSAhPT0gJ0Z1bGZpbGxlZCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ1N0YXRlICE9PSAnRmFpbGVkJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hhdFN0YXRlID09PSBDaGF0U3RhdGUuSW5pdGlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlTWljQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikgeyByZXR1cm4gX3RoaXMuc2V0RXJyb3IoZXJyLCBDaGF0RXJyb3JUeXBlLlJlY292ZXJhYmxlKTsgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuYXBwZW5kVG9DaGF0ID0gZnVuY3Rpb24gKGNvbnRlbnQsIGZyb20pIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IF9fc3ByZWFkQXJyYXlzKHRoaXMubWVzc2FnZXMsIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICAgIGZyb206IGZyb20sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0YXRlIGNvbnRyb2wgbWV0aG9kc1xuICAgICAqL1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnNldEVycm9yID0gZnVuY3Rpb24gKGVycm9yLCBlcnJvclR5cGUpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOiBlcnJvci5tZXNzYWdlO1xuICAgICAgICB0aGlzLmNoYXRTdGF0ZSA9IENoYXRTdGF0ZS5FcnJvcjtcbiAgICAgICAgdGhpcy5lcnJvciA9IHsgbWVzc2FnZTogbWVzc2FnZSwgZXJyb3JUeXBlOiBlcnJvclR5cGUgfTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNoYXRTdGF0ZSA9IENoYXRTdGF0ZS5Jbml0aWFsO1xuICAgICAgICB0aGlzLnRleHQgPSAnJztcbiAgICAgICAgdGhpcy5lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy53ZWxjb21lTWVzc2FnZSlcbiAgICAgICAgICAgIHRoaXMuYXBwZW5kVG9DaGF0KHRoaXMud2VsY29tZU1lc3NhZ2UsIE1lc3NhZ2VGcm9tLkJvdCk7XG4gICAgICAgIHRoaXMuYXVkaW9SZWNvcmRlciAmJiB0aGlzLmF1ZGlvUmVjb3JkZXIuY2xlYXIoKTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmxpc3RlbmluZ0Zvb3RlckpTWCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHZpc3VhbGl6YXRpb24gPSBoKFwiY2FudmFzXCIsIHsgaGVpZ2h0OiBcIjUwXCIgfSk7XG4gICAgICAgIHZhciBjYW5jZWxCdXR0b24gPSAoaChcImFtcGxpZnktYnV0dG9uXCIsIHsgXCJkYXRhLXRlc3RcIjogXCJjaGF0Ym90LWNhbmNlbC1idXR0b25cIiwgaGFuZGxlQnV0dG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUNhbmNlbEJ1dHRvbigpOyB9LCBjbGFzczogXCJpY29uLWJ1dHRvblwiLCB2YXJpYW50OiBcImljb25cIiwgaWNvbjogXCJiYW5cIiB9KSk7XG4gICAgICAgIHJldHVybiBbdmlzdWFsaXphdGlvbiwgY2FuY2VsQnV0dG9uXTtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmZvb3RlckpTWCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuY2hhdFN0YXRlID09PSBDaGF0U3RhdGUuTGlzdGVuaW5nKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdGVuaW5nRm9vdGVySlNYKCk7XG4gICAgICAgIHZhciBpbnB1dFBsYWNlaG9sZGVyID0gdGhpcy50ZXh0RW5hYmxlZFxuICAgICAgICAgICAgPyBUcmFuc2xhdGlvbnMuVEVYVF9JTlBVVF9QTEFDRUhPTERFUlxuICAgICAgICAgICAgOiBUcmFuc2xhdGlvbnMuVk9JQ0VfSU5QVVRfUExBQ0VIT0xERVI7XG4gICAgICAgIHZhciB0ZXh0SW5wdXQgPSAoaChcImFtcGxpZnktaW5wdXRcIiwgeyBwbGFjZWhvbGRlcjogSTE4bi5nZXQoaW5wdXRQbGFjZWhvbGRlciksIGRlc2NyaXB0aW9uOiBcInRleHRcIiwgaGFuZGxlSW5wdXRDaGFuZ2U6IGZ1bmN0aW9uIChldnQpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVRleHRDaGFuZ2UoZXZ0KTsgfSwgdmFsdWU6IHRoaXMudGV4dCwgZGlzYWJsZWQ6IHRoaXMuY2hhdFN0YXRlID09PSBDaGF0U3RhdGUuRXJyb3IgfHwgIXRoaXMudGV4dEVuYWJsZWQgfSkpO1xuICAgICAgICB2YXIgbWljQnV0dG9uID0gdGhpcy52b2ljZUVuYWJsZWQgJiYgKGgoXCJhbXBsaWZ5LWJ1dHRvblwiLCB7IFwiZGF0YS10ZXN0XCI6IFwiY2hhdGJvdC1taWMtYnV0dG9uXCIsIGhhbmRsZUJ1dHRvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVNaWNCdXR0b24oKTsgfSwgY2xhc3M6IFwiaWNvbi1idXR0b25cIiwgdmFyaWFudDogXCJpY29uXCIsIGljb246IFwibWljcm9waG9uZVwiLCBkaXNhYmxlZDogdGhpcy5jaGF0U3RhdGUgPT09IENoYXRTdGF0ZS5FcnJvciB8fCB0aGlzLmNoYXRTdGF0ZSAhPT0gQ2hhdFN0YXRlLkluaXRpYWwgfSkpO1xuICAgICAgICB2YXIgc2VuZEJ1dHRvbiA9IHRoaXMudGV4dEVuYWJsZWQgJiYgKGgoXCJhbXBsaWZ5LWJ1dHRvblwiLCB7IFwiZGF0YS10ZXN0XCI6IFwiY2hhdGJvdC1zZW5kLWJ1dHRvblwiLCBjbGFzczogXCJpY29uLWJ1dHRvblwiLCB2YXJpYW50OiBcImljb25cIiwgaWNvbjogXCJzZW5kXCIsIGhhbmRsZUJ1dHRvbkNsaWNrOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zZW5kVGV4dE1lc3NhZ2UoKTsgfSwgZGlzYWJsZWQ6IHRoaXMuY2hhdFN0YXRlID09PSBDaGF0U3RhdGUuRXJyb3IgfHwgdGhpcy5jaGF0U3RhdGUgIT09IENoYXRTdGF0ZS5Jbml0aWFsIH0pKTtcbiAgICAgICAgcmV0dXJuIFt0ZXh0SW5wdXQsIG1pY0J1dHRvbiwgc2VuZEJ1dHRvbl07XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5lcnJvclRvYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuZXJyb3IpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBfYSA9IHRoaXMuZXJyb3IsIG1lc3NhZ2UgPSBfYS5tZXNzYWdlLCBlcnJvclR5cGUgPSBfYS5lcnJvclR5cGU7XG4gICAgICAgIHJldHVybiBoKFwiYW1wbGlmeS10b2FzdFwiLCB7IG1lc3NhZ2U6IEkxOG4uZ2V0KG1lc3NhZ2UpLCBoYW5kbGVDbG9zZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlVG9hc3RDbG9zZShlcnJvclR5cGUpOyB9IH0pO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImRpdlwiLCB7IGNsYXNzOiBcImFtcGxpZnktY2hhdGJvdFwiIH0sIGgoXCJzbG90XCIsIHsgbmFtZTogXCJoZWFkZXJcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiaGVhZGVyXCIsIFwiZGF0YS10ZXN0XCI6IFwiY2hhdGJvdC1oZWFkZXJcIiB9LCBJMThuLmdldCh0aGlzLmJvdFRpdGxlKSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IFwiYm9keVwiLCBcImRhdGEtdGVzdFwiOiBcImNoYXRib3QtYm9keVwiIH0sIHRoaXMubWVzc2FnZUpTWCh0aGlzLm1lc3NhZ2VzKSksIGgoXCJkaXZcIiwgeyBjbGFzczogXCJmb290ZXJcIiwgXCJkYXRhLXRlc3RcIjogXCJjaGF0Ym90LWZvb3RlclwiIH0sIHRoaXMuZm9vdGVySlNYKCkpLCB0aGlzLmVycm9yVG9hc3QoKSkpKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjbGFzc18xLnByb3RvdHlwZSwgXCJlbGVtZW50XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzXzE7XG59KCkpO1xuQW1wbGlmeUNoYXRib3Quc3R5bGUgPSBhbXBsaWZ5Q2hhdGJvdENzcztcbmV4cG9ydCB7IEFtcGxpZnlDaGF0Ym90IGFzIGFtcGxpZnlfY2hhdGJvdCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==