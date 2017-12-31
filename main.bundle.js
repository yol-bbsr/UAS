webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/activity-graph/activity-graph.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-configuration (simulateEvent)=\"onSimulation($event)\"></app-user-configuration>\r\n<mat-card>\r\n  <mat-card-title>Transactions Wise Activity</mat-card-title>\r\n  <div #graphcontainer>\r\n    <p></p>\r\n  </div>\r\n  <mat-card-footer *ngIf=\"displayStep\"><hr/></mat-card-footer>\r\n</mat-card>\r\n<mat-card>\r\n  <mat-card-title *ngIf=\"displayStep\">Steps Wise Activity</mat-card-title>\r\n  <div #stepgraphcontainer>\r\n    <p></p>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/activity-graph/activity-graph.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card-title {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-graph/activity-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__("../../../../d3-ng2-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_graph_functions__ = __webpack_require__("../../../../../src/app/activity-graph/activity-graph.functions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityGraphComponent = (function () {
    function ActivityGraphComponent(renderrer, d3Service) {
        this.renderrer = renderrer;
        this.displayStep = false;
        this.d3 = d3Service.getD3();
    }
    ActivityGraphComponent.prototype.ngOnInit = function () {
        var d3ParentElement;
        if (this.el !== null) {
            d3ParentElement = this.d3.select(this.el.nativeElement);
            this.chartContainer = d3ParentElement.select('p');
            this.chartRef = new __WEBPACK_IMPORTED_MODULE_2__activity_graph_functions__["b" /* ChartProperties */](this.d3, this.chartContainer, this.el.nativeElement.offsetWidth, false);
        }
        if (this.step !== undefined) {
            d3ParentElement = this.d3.select(this.step.nativeElement);
            this.stepChartContainer = d3ParentElement.select('p');
            this.stepChartRef = new __WEBPACK_IMPORTED_MODULE_2__activity_graph_functions__["b" /* ChartProperties */](this.d3, this.stepChartContainer, this.step.nativeElement.offsetWidth, false);
        }
    };
    ActivityGraphComponent.prototype.onSimulation = function ($event) {
        this.clearChart();
        this.chartContainer.attr('width', '100%');
        this.chartContainer.datum($event.data.activites).call(__WEBPACK_IMPORTED_MODULE_2__activity_graph_functions__["a" /* ActivityChart */].drawChart, this.chartRef);
        if ($event.settings.isSimulateSteps) {
            this.displayStep = true;
            this.stepChartContainer.attr('width', '100%');
            this.stepChartContainer.datum($event.data.setpActivities).call(__WEBPACK_IMPORTED_MODULE_2__activity_graph_functions__["a" /* ActivityChart */].drawChart, this.stepChartRef);
        }
    };
    ActivityGraphComponent.prototype.ngOnDestroy = function () {
        this.clearChart();
    };
    ActivityGraphComponent.prototype.clearChart = function () {
        this.displayStep = false;
        if (this.chartContainer.empty && !this.chartContainer.empty()) {
            this.chartContainer.selectAll('*').remove();
        }
        if (this.stepChartContainer !== undefined && this.stepChartContainer.empty && !this.stepChartContainer.empty()) {
            this.stepChartContainer.selectAll('*').remove();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('graphcontainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ActivityGraphComponent.prototype, "el", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('stepgraphcontainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ActivityGraphComponent.prototype, "step", void 0);
    ActivityGraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activity-graph',
            template: __webpack_require__("../../../../../src/app/activity-graph/activity-graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-graph/activity-graph.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]])
    ], ActivityGraphComponent);
    return ActivityGraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-graph/activity-graph.functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChartProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityChart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var ChartProperties = (function () {
    function ChartProperties(d3ServiceRef, svgElementRef, chartWidth, showTitle, showYearTicks) {
        this.d3ServiceRef = d3ServiceRef;
        this.svgElementRef = svgElementRef;
        this.chartWidth = chartWidth;
        this.showTitle = showTitle;
        this.showYearTicks = showYearTicks;
        this.svgElement = svgElementRef;
        if (chartWidth !== undefined) {
            this.width = chartWidth - ChartProperties.margin.left - ChartProperties.margin.right;
        }
        else {
            this.width = 768 - ChartProperties.margin.left - ChartProperties.margin.right;
        }
        if (showTitle !== undefined) {
            this.drawTitle = showTitle;
        }
        else {
            this.drawTitle = true;
        }
        if (showYearTicks !== undefined) {
            this.emphasizeYearTicks = showYearTicks;
        }
        else {
            this.emphasizeYearTicks = true;
        }
        this.tooltip = this.d3ServiceRef.select('body').append('div').attr('class', 'tooltip').style('opacity', 0);
    }
    // top margin -> title and legend
    // right margin -> horizontal axis title
    // left maring -> y axis title
    ChartProperties.margin = { top: 70, right: 40, bottom: 20, left: 100 };
    // height of horizontal data bars
    ChartProperties.dataHeight = 8;
    // spacing between horizontal data bars
    ChartProperties.lineSpacing = 8;
    // vertical space for heading
    ChartProperties.paddingTopHeading = -50;
    // vertical overhang of vertical grid lines on bottom
    ChartProperties.paddingBottom = 10;
    // space for y axis titles
    ChartProperties.paddingLeft = -100;
    return ChartProperties;
}());

var ActivityChart = (function () {
    function ActivityChart() {
    }
    ActivityChart.drawChart = function (selection, settings) {
        var definedBlocks = null;
        var customCategories = null;
        var isDateOnlyFormat = null;
        selection.each(function (dataset) {
            var height = ChartProperties.dataHeight * dataset.length + ChartProperties.lineSpacing * dataset.length - 1;
            // check how data is arranged
            if (definedBlocks === null) {
                definedBlocks = false;
                for (var i = 0; i < dataset.length; i++) {
                    if (dataset[i].data[0].length === 3) {
                        definedBlocks = true;
                        break;
                    }
                    else {
                        if (definedBlocks) {
                            throw new Error('Detected different data formats in input data. Format can either be ' +
                                'continuous data format or time gap data format but not both.');
                        }
                    }
                }
            }
            // check if data has custom categories
            if (customCategories === null) {
                customCategories = 0;
                for (var i = 0; i < dataset.length; i++) {
                    if (dataset[i].data[0][1] !== 0 && dataset[i].data[0][1] !== 1) {
                        customCategories = 1;
                        break;
                    }
                }
            }
            // parse data text strings to JavaScript date stamps
            var parseDate = settings.d3ServiceRef.timeParse('%Y-%m-%d');
            var parseDateTime = settings.d3ServiceRef.timeParse('%Y-%m-%d %H:%M:%S');
            var parseDateRegEx = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
            var parseDateTimeRegEx = new RegExp(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
            if (isDateOnlyFormat === null) {
                isDateOnlyFormat = true;
            }
            dataset.forEach(function (d) {
                d.data.forEach(function (d1) {
                    if (!(d1[0] instanceof Date)) {
                        if (parseDateRegEx.test(d1[0])) {
                            // d1[0] is date without time data
                            d1[0] = parseDate(d1[0]);
                        }
                        else if (parseDateTimeRegEx.test(d1[0])) {
                            // d1[0] is date with time data
                            d1[0] = parseDateTime(d1[0]);
                            isDateOnlyFormat = false;
                        }
                        else {
                            console.log(d1);
                            throw new Error('Date/time format not recognized. Pick between YYYY-MM-DD or YYYY-MM-DD HH:MM:SS.');
                        }
                        if (!definedBlocks) {
                            d1[2] = settings.d3ServiceRef.timeSecond.offset(d1[0], d.interval_s);
                        }
                        else {
                            if (parseDateRegEx.test(d1[2])) {
                                // d1[2] is date without time data
                                d1[2] = parseDate(d1[2]);
                            }
                            else if (parseDateTimeRegEx.test(d1[2])) {
                                // d1[2] is date with time data
                                d1[2] = parseDateTime(d1[2]);
                            }
                            else {
                                throw new Error('Date/time format not recognized. Pick between YYYY-MM-DD or YYYY-MM-DD HH:MM:SS.');
                            }
                        }
                    }
                });
            });
            // cluster data by dates to form time blocks
            dataset.forEach(function (series, seriesI) {
                var tmpData = [];
                var dataLength = series.data.length;
                series.data.forEach(function (d, i) {
                    if (i !== 0 && i < dataLength) {
                        if (d[1] === tmpData[tmpData.length - 1][1]) {
                            // the value has not changed since the last date
                            if (definedBlocks) {
                                if (tmpData[tmpData.length - 1][2].getTime() === d[0].getTime()) {
                                    // end of old and start of new block are the same
                                    tmpData[tmpData.length - 1][2] = d[2];
                                    tmpData[tmpData.length - 1][3] = 1;
                                }
                                else {
                                    tmpData.push(d);
                                }
                            }
                            else {
                                tmpData[tmpData.length - 1][2] = d[2];
                                tmpData[tmpData.length - 1][3] = 1;
                            }
                        }
                        else {
                            // the value has changed since the last date
                            d[3] = 0;
                            if (!definedBlocks) {
                                // extend last block until new block starts
                                tmpData[tmpData.length - 1][2] = d[0];
                            }
                            tmpData.push(d);
                        }
                    }
                    else if (i === 0) {
                        d[3] = 0;
                        tmpData.push(d);
                    }
                });
                dataset[seriesI].disp_data = tmpData;
            });
            // determine start and end dates among all nested datasets
            var startDate = 0;
            var endDate = 0;
            dataset.forEach(function (series, seriesI) {
                if (series.disp_data.length > 0) {
                    if (startDate === 0) {
                        startDate = series.disp_data[0][0];
                        endDate = series.disp_data[series.disp_data.length - 1][2];
                    }
                    else {
                        if (series.disp_data[0][0] < startDate) {
                            startDate = series.disp_data[0][0];
                        }
                        if (series.disp_data[series.disp_data.length - 1][2] > endDate) {
                            endDate = series.disp_data[series.disp_data.length - 1][2];
                        }
                    }
                }
            });
            // define scales
            var xScale = settings.d3ServiceRef.scaleTime()
                .domain([startDate, endDate])
                .range([0, settings.width])
                .clamp(true);
            // define axes
            var xAxis = settings.d3ServiceRef.axisTop(xScale);
            // create SVG element
            var svg = settings.svgElement.append('svg')
                .attr('width', settings.width + ChartProperties.margin.left + ChartProperties.margin.right)
                .attr('height', height + ChartProperties.margin.top + ChartProperties.margin.bottom)
                .append('g').attr('transform', 'translate(' + ChartProperties.margin.left + ',' + ChartProperties.margin.top + ')');
            // create basic element groups
            svg.append('g').attr('id', 'g_title');
            svg.append('g').attr('id', 'g_axis');
            svg.append('g').attr('id', 'g_data');
            // create y axis labels
            var labels = svg.select('#g_axis').selectAll('text').data(dataset.slice(0, dataset.length)).enter();
            // text labels
            labels.append('text')
                .attr('x', ChartProperties.paddingLeft)
                .attr('y', ChartProperties.lineSpacing + ChartProperties.dataHeight / 2)
                .text(function (d) { if (!(d.measure_html != null)) {
                return d.measure;
            } })
                .attr('transform', function (d, i) { return 'translate(0,' + ((ChartProperties.lineSpacing + ChartProperties.dataHeight) * i) + ')'; })
                .attr('class', function (d) { var returnCSSClass = 'ytitle'; if (d.measure_url != null) {
                returnCSSClass = returnCSSClass + ' link';
            } return returnCSSClass; })
                .on('click', function (d) { if (d.measure_url != null) {
                return window.open(d.measure_url);
            } return null; });
            // HTML labels
            labels.append('foreignObject')
                .attr('x', ChartProperties.paddingLeft)
                .attr('y', ChartProperties.lineSpacing)
                .attr('transform', function (d, i) { return 'translate(0,' + ((ChartProperties.lineSpacing + ChartProperties.dataHeight) * i) + ')'; })
                .attr('width', -1 * ChartProperties.paddingLeft)
                .attr('height', ChartProperties.dataHeight)
                .attr('class', 'ytitle')
                .html(function (d) { if (d.measure_html != null) {
                return d.measure_html;
            } });
            // create vertical grid
            svg.select('#g_axis').selectAll('line.vert_grid').data(xScale.ticks())
                .enter()
                .append('line')
                .attr('class', 'vert_grid')
                .attr('x1', function (d) { return xScale(d); })
                .attr('x2', function (d) { return xScale(d); })
                .attr('y1', 0)
                .attr('y2', ChartProperties.dataHeight * dataset.length + ChartProperties.lineSpacing * dataset.length - 1 + ChartProperties.paddingBottom);
            // create horizontal grid
            svg.select('#g_axis').selectAll('line.horz_grid').data(dataset)
                .enter()
                .append('line')
                .attr('class', 'horz_grid')
                .attr('x1', 0)
                .attr('x2', settings.width)
                .attr('y1', function (d, i) { return ((ChartProperties.lineSpacing + ChartProperties.dataHeight) * i) + ChartProperties.lineSpacing + ChartProperties.dataHeight / 2; })
                .attr('y2', function (d, i) { return ((ChartProperties.lineSpacing + ChartProperties.dataHeight) * i) + ChartProperties.lineSpacing + ChartProperties.dataHeight / 2; });
            // create x axis
            svg.select('#g_axis').append('g')
                .attr('class', 'axis')
                .call(xAxis);
            // make y groups for different data series
            var g = svg.select('#g_data').selectAll('.g_data')
                .data(dataset.slice(0, dataset.length))
                .enter()
                .append('g')
                .attr('transform', function (d, i) { return 'translate(0,' + ((ChartProperties.lineSpacing + ChartProperties.dataHeight) * i) + ')'; })
                .attr('class', 'dataset');
            // add data series
            g.selectAll('rect')
                .data(function (d) { return d.disp_data; })
                .enter()
                .append('rect')
                .attr('x', function (d) { return xScale(d[0]); })
                .attr('y', ChartProperties.lineSpacing)
                .attr('width', function (d) { return (xScale(d[2]) - xScale(d[0])); })
                .attr('height', ChartProperties.dataHeight)
                .attr('class', function (d) {
                if (customCategories) {
                    if (d[1] === 'Pacing') {
                        return 'pacing';
                    }
                    else if (d[1] === 'Think Time') {
                        return 'thinktime';
                    }
                    else {
                        return 'transaction';
                    }
                }
                else {
                    if (d[1] === 1) {
                        return 'transaction';
                    }
                    else {
                        return 'pacing';
                    }
                }
            })
                .on('mouseover', function (d, i) {
                var rect = this;
                var matrix = rect.getScreenCTM().translate(+rect.getAttribute('x'), +rect.getAttribute('y'));
                settings.tooltip.transition().duration(200).style('opacity', 0.9);
                settings.tooltip.html(function () {
                    var output;
                    if (customCategories) {
                        // custom categories: display category name
                        output = '&nbsp;' + d[1] + '&nbsp;:&nbsp;';
                    }
                    else {
                        if (d[1] === 1) {
                            // transaction icon
                            output = '<i class="material-icons tooltip_transaction">directions_run</i>';
                        }
                        else {
                            // pacing icon
                            output = '<i class="material-icons tooltip_pacing">airline_seat_individual_suite</i>';
                        }
                    }
                    if (isDateOnlyFormat) {
                        if (d[2] > settings.d3ServiceRef.timeSecond.offset(d[0], 86400)) {
                            return output + __WEBPACK_IMPORTED_MODULE_0_moment__(d[0]).format('l')
                                + ' - ' + __WEBPACK_IMPORTED_MODULE_0_moment__(d[2]).format('l');
                        }
                        return output + __WEBPACK_IMPORTED_MODULE_0_moment__(parseDate(d[0])).format('l');
                    }
                    else {
                        if (d[2] > settings.d3ServiceRef.timeSecond.offset(d[0], 86400)) {
                            return output + __WEBPACK_IMPORTED_MODULE_0_moment__(d[0]).format('l') + ' '
                                + __WEBPACK_IMPORTED_MODULE_0_moment__(d[0]).format('LTS') + ' - '
                                + __WEBPACK_IMPORTED_MODULE_0_moment__(d[2]).format('l') + ' '
                                + __WEBPACK_IMPORTED_MODULE_0_moment__(d[2]).format('LTS');
                        }
                        return output + __WEBPACK_IMPORTED_MODULE_0_moment__(d[0]).format('HH:mm:ss') + ' - '
                            + __WEBPACK_IMPORTED_MODULE_0_moment__(d[2]).format('HH:mm:ss');
                    }
                })
                    .style('left', function () { return window.pageXOffset + matrix.e + 'px'; })
                    .style('top', function () { return window.pageYOffset + matrix.f - 11 + 'px'; })
                    .style('height', ChartProperties.dataHeight + 11 + 'px');
            })
                .on('mouseout', function () {
                settings.tooltip.transition()
                    .duration(500)
                    .style('opacity', 0);
            });
            // rework ticks and grid for better visual structure
            var xTicks = xScale.ticks();
            var isYearTick = xTicks.map(function (t) { return +t === +(new Date(t.getFullYear(), 0, 1, 0, 0, 0)); });
            var isMonthTick = xTicks.map(function (t) { return +t === +(new Date(t.getFullYear(), t.getMonth(), 1, 0, 0, 0)); });
            // year emphasis
            // ensure year emphasis is only active if years are the biggest clustering unit
            if (settings.emphasizeYearTicks
                && !(isYearTick.every(function (d) { return d === true; }))
                && isMonthTick.every(function (d) { return d === true; })) {
                settings.d3ServiceRef.selectAll('g.tick').each(function (d, i) { if (isYearTick[i]) {
                    settings.d3ServiceRef.select(this).attr('class', 'x_tick_emph');
                } });
                settings.d3ServiceRef.selectAll('.vert_grid').each(function (d, i) { if (isYearTick[i]) {
                    settings.d3ServiceRef.select(this).attr('class', 'vert_grid_emph');
                } });
            }
            // create title
            if (settings.drawTitle) {
                svg.select('#g_title')
                    .append('text')
                    .attr('x', ChartProperties.paddingLeft)
                    .attr('y', ChartProperties.paddingTopHeading)
                    .text('Virtual User Activity')
                    .attr('class', 'heading');
            }
            // create legend
            if (!customCategories) {
                var legend = svg.select('#g_title')
                    .append('g')
                    .attr('id', 'g_legend')
                    .attr('transform', 'translate(0,-12)');
                legend.append('rect')
                    .attr('x', settings.width + ChartProperties.margin.right - 150)
                    .attr('y', ChartProperties.paddingTopHeading)
                    .attr('height', 15)
                    .attr('width', 15)
                    .attr('class', 'transaction');
                legend.append('text')
                    .attr('x', settings.width + ChartProperties.margin.right - 150 + 20)
                    .attr('y', ChartProperties.paddingTopHeading + 8.5)
                    .text('Transaction')
                    .attr('class', 'legend');
                legend.append('rect')
                    .attr('x', settings.width + ChartProperties.margin.right - 150)
                    .attr('y', ChartProperties.paddingTopHeading + 17)
                    .attr('height', 15)
                    .attr('width', 15)
                    .attr('class', 'pacing');
                legend.append('text')
                    .attr('x', settings.width + ChartProperties.margin.right - 150 + 20)
                    .attr('y', ChartProperties.paddingTopHeading + 8.5 + 15 + 2)
                    .text('Pacing')
                    .attr('class', 'legend');
            }
        });
    };
    return ActivityChart;
}());



/***/ }),

/***/ "../../../../../src/app/activity-graph/graph-settings/graph-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 mat-dialog-title class=\"dialog-title\">\n    <i class=\"material-icons\">settings</i> Setting </h2>\n  <hr>\n  <mat-dialog-content>\n    <section class=\"dialog-section\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n      <mat-slide-toggle class=\"dialog-margin\" color=\"primary\" [(ngModel)]=\"settings.isOpenConfigPanel\">\n        Always Open Configuration Section\n      </mat-slide-toggle>\n      <p class=\"info\">This setting controls the state of confuguration section.</p>\n    </section>\n    <section class=\"dialog-section\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n      <mat-slide-toggle class=\"dialog-margin\" color=\"warn\" [(ngModel)]=\"settings.isSimulateSteps\">\n        Simulate Steps\n      </mat-slide-toggle>\n      <p class=\"info warn\">\n        This setting controls the simulation of steps.<br/>\n        [Caution]: This is a resource-intensive task, so don't switch on unnecessarily.\n      </p>\n    </section>\n    <p class=\"info\">\n      Updated settings will be taken effect after clicking on simulation button.<br/>\n      [NOTE]: All these settings are for the current session only!\n    </p>\n  </mat-dialog-content>\n  <hr>\n  <mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\n    <span fxFlex></span>\n    <button mat-raised-button color=\"primary\" (click)=\"onCloseConfirm()\">CONFIRM</button>\n    <button mat-raised-button color=\"warn\" (click)=\"onCloseCancel()\">CANCEL</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "../../../../../src/app/activity-graph/graph-settings/graph-settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialog-title {\n  font-size: 30px; }\n\n.dialog-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100px; }\n  .dialog-section .warn {\n    color: #deb887; }\n\n.dialog-margin {\n  margin: 10px 10px 0 10px; }\n\n.info {\n  margin-top: 0px;\n  font-size: 12px;\n  color: darkgray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-graph/graph-settings/graph-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GraphSettingsComponent = (function () {
    function GraphSettingsComponent(thisDialogRef, settings) {
        this.thisDialogRef = thisDialogRef;
        this.settings = settings;
    }
    GraphSettingsComponent.prototype.ngOnInit = function () {
        this.originalSettings = { isOpenConfigPanel: this.settings.isOpenConfigPanel, isSimulateSteps: this.settings.isSimulateSteps };
    };
    GraphSettingsComponent.prototype.ngOnDestroy = function () {
        this.originalSettings = null;
    };
    GraphSettingsComponent.prototype.onCloseConfirm = function () {
        this.thisDialogRef.close(this.settings);
    };
    GraphSettingsComponent.prototype.onCloseCancel = function () {
        this.thisDialogRef.close(this.originalSettings);
    };
    GraphSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-graph-settings',
            template: __webpack_require__("../../../../../src/app/activity-graph/graph-settings/graph-settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-graph/graph-settings/graph-settings.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], GraphSettingsComponent);
    return GraphSettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-graph/user-configuration/user-configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\r\n  <mat-expansion-panel [expanded]=\"panelOpenState === true\" (opened)=\"panelOpenState = true\">\r\n    <mat-expansion-panel-header matTooltip=\"Expand to modify the configuration!\">\r\n      <mat-panel-title class=\"user-config-header\">\r\n        <i class=\"material-icons\">perm_data_setting</i>\r\n        <span class=\"text\">Thread Groups</span>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <div class=\"mat-elevation-z1\">\r\n      <mat-table #table [dataSource]=\"dataSource\">\r\n        <ng-container matColumnDef=\"select\">\r\n          <mat-header-cell *matHeaderCellDef>\r\n            <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n            </mat-checkbox>\r\n          </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">\r\n            <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n            </mat-checkbox>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"THREADS\">\r\n          <mat-header-cell *matHeaderCellDef> # of Threads (users) </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            <mat-form-field>\r\n              <input type=\"number\" matInput [(ngModel)]=\"element.threads\">\r\n            </mat-form-field>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"DELAY\">\r\n          <mat-header-cell *matHeaderCellDef> startup Delay (sec) </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            <mat-form-field>\r\n              <input type=\"number\" min=\"0\" matInput [(ngModel)]=\"element.delay\">\r\n              <span matSuffix>sec</span>\r\n            </mat-form-field>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"START\">\r\n          <mat-header-cell *matHeaderCellDef> Ramp-Up (sec) </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            <mat-form-field>\r\n              <input type=\"number\" min=\"0\" matInput [(ngModel)]=\"element.startup\">\r\n              <span matSuffix>sec</span>\r\n            </mat-form-field>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"HOLD\">\r\n          <mat-header-cell *matHeaderCellDef> Durarion (sec) </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            <mat-form-field>\r\n              <input type=\"number\" min=\"0\" matInput [(ngModel)]=\"element.hold\">\r\n              <span matSuffix>sec</span>\r\n            </mat-form-field>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"SHUTDOWN\">\r\n          <mat-header-cell *matHeaderCellDef> Ramp-Down (sec) </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            <mat-form-field>\r\n              <input type=\"number\" min=\"0\" matInput [(ngModel)]=\"element.shutdown\">\r\n              <span matSuffix>sec</span>\r\n            </mat-form-field>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"EXPAND\">\r\n          <mat-header-cell *matHeaderCellDef> &nbsp; </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">\r\n            <button mat-icon-button title=\"expand\">\r\n              <mat-icon title=\"expand\" class=\"expand\">keyboard_arrow_down</mat-icon>\r\n            </button>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\" matRipple class=\"thread-group-row\" [cdkDetailRow]=\"row\" [cdkDetailRowTpl]=\"tpl\"></mat-row>\r\n      </mat-table>\r\n    </div>\r\n\r\n    <ng-template #tpl let-element>\r\n      <div class=\"scenario-container\" [@detailExpand] fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.xs=\"column\" fxLayoutGap.xs=\"0px\">\r\n        <mat-form-field class=\"scenario-name\">\r\n          <input type=\"text\" placeholder=\"Scenaio Name\" matInput [(ngModel)]=\"element.scenario.name\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"pacing\">\r\n          <input type=\"number\" min=\"0\" placeholder=\"Pacing Time\" matInput [(ngModel)]=\"element.scenario.pacing\">\r\n          <span matSuffix>sec</span>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"mat-row steps\" [@detailExpand] fxLayout=\"column\" fxLayoutGap=\"20px\" [dragula]='\"scenarios\"' [dragulaModel]='element.scenario.steps'>\r\n        <div *ngFor=\"let step of element.scenario.steps; let i = index;\" class=\"step-container\" fxLayout=\"row\" fxLayoutGap=\"10px\"\r\n          fxLayout.xs=\"column\" fxLayoutGap.xs=\"0px\">\r\n          <div fxFlex=\"90\">\r\n            <div class=\"step-from\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-around center\" fxLayoutWrap>\r\n              <mat-form-field class=\"step-name\">\r\n                <input type=\"text\" placeholder=\"Step Name\" matInput [(ngModel)]=\"step.name\">\r\n              </mat-form-field>\r\n              <mat-form-field class=\"step-rt\">\r\n                <input type=\"number\" min=\"0\" placeholder=\"Response Time\" matInput [(ngModel)]=\"step.responseTime\">\r\n                <span matSuffix>sec</span>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"step-tt\">\r\n                <input type=\"number\" min=\"0\" placeholder=\"Think Time\" matInput [(ngModel)]=\"step.thinkTime\">\r\n                <span matSuffix>sec</span>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div fxFlex=\"10\" fxLayout=\"column\" fxLayoutGap=\"0px\" fxLayoutAlign=\"space-between end\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"onAddStep(element, i)\">\r\n              <mat-icon>add</mat-icon>\r\n            </button>\r\n            <span fxFlex=\"1\"></span>\r\n            <button mat-raised-button color=\"warn\" (click)=\"onRemoveStep(element, i)\">\r\n              <mat-icon>remove</mat-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n\r\n    <mat-action-row fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"onAddScenario()\">\r\n        <mat-icon>playlist_add</mat-icon> Add Scenario\r\n      </button>\r\n      <span fxFlex=\"1\"></span>\r\n      <button mat-raised-button color=\"warn\" (click)=\"onDeleteScenario()\">\r\n        <mat-icon>delete</mat-icon> Remove Scenario\r\n      </button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n<mat-toolbar>\r\n  <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n    <mat-chip-list class=\"user-config-desc\">\r\n      <mat-chip color=\"primary\" selected=\"true\" matTooltip=\"Total Virtual Users\">\r\n        <i class=\"material-icons\">people</i> {{totalvUsers}}</mat-chip>\r\n      <mat-chip color=\"primary\" selected=\"true\" matTooltip=\"Total Duration\">\r\n        <i class=\"material-icons\">schedule</i> {{exeDuration}}</mat-chip>\r\n      <mat-chip color=\"primary\" selected=\"true\" matTooltip=\"Total Completed Iterations\">\r\n        <i class=\"material-icons\">repeat</i> {{iteration}}</mat-chip>\r\n    </mat-chip-list>\r\n    <span fxFlex></span>\r\n    <button mat-icon-button (click)=\"onPreference()\">\r\n      <mat-icon>settings</mat-icon>\r\n    </button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"onSimulate()\">\r\n      <mat-icon>playlist_play</mat-icon> Simulate\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/activity-graph/user-configuration/user-configuration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-config-header {\n  font-size: 22px; }\n  .user-config-header .text {\n    font-size: 22px;\n    margin-left: 5px; }\n\n.user-config-desc mat-chip {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  font-size: 22px; }\n\n.user-config-desc .material-icons {\n  margin-right: 15px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n  .mat-table .mat-column-select {\n    overflow: visible;\n    max-width: 40px; }\n  .mat-table .mat-form-field {\n    width: 100px; }\n  .mat-table .mat-column-EXPAND {\n    max-width: 40px; }\n  .mat-table .thread-group-row {\n    position: relative; }\n    .mat-table .thread-group-row.expanded {\n      border-bottom-color: transparent; }\n    .mat-table .thread-group-row:not(.expanded) {\n      cursor: pointer; }\n    .mat-table .thread-group-row:not(.expanded):hover {\n      background: #f5f5f5; }\n\n.scenario-container {\n  overflow: hidden;\n  padding: 15px 5%;\n  background-color: beige;\n  width: 100%; }\n  .scenario-container .pacing {\n    width: 80px; }\n  .scenario-container .scenario-name {\n    width: 300px; }\n\n.steps {\n  overflow: hidden;\n  padding: 15px 5%;\n  background-color: beige; }\n  .steps .step-container {\n    width: 100%;\n    position: relative;\n    border: solid 1px #673ab7; }\n    .steps .step-container:after {\n      content: '';\n      width: 0;\n      height: 0;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-bottom: 0px solid transparent;\n      border-top: 20px solid #673ab7;\n      position: absolute;\n      top: 100%;\n      left: 50%;\n      display: block; }\n    .steps .step-container:last-child:after {\n      border-top: 0px solid transparent; }\n    .steps .step-container .step-name {\n      width: 300px; }\n    .steps .step-container .step-rt {\n      width: 95px; }\n    .steps .step-container .step-tt {\n      width: 75px; }\n    .steps .step-container .step-from {\n      margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activity-graph/user-configuration/user-configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserConfigurationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_configuration_functions__ = __webpack_require__("../../../../../src/app/activity-graph/user-configuration/user-configuration.functions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graph_settings_graph_settings_component__ = __webpack_require__("../../../../../src/app/activity-graph/graph-settings/graph-settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserConfigurationComponent = (function () {
    function UserConfigurationComponent(dragula, snackBar, dialog) {
        this.dragula = dragula;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.panelOpenState = true;
        this.simulateEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.displayedColumns = ['select', 'THREADS', 'DELAY', 'START', 'HOLD', 'SHUTDOWN', 'EXPAND'];
        this.dragula.setOptions('Steps-bag', { revertOnSpill: true });
    }
    UserConfigurationComponent.prototype.ngOnInit = function () {
        this.graphSettings = { isOpenConfigPanel: true, isSimulateSteps: false };
        this.threadGroups = [];
        this.threadGroups.push({ threads: 12, delay: 0, startup: 900, hold: 1800, shutdown: 900, scenario: this.defaultScenario() });
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableDataSource */]();
        this.selection = new __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        this.onSimulate();
    };
    UserConfigurationComponent.prototype.defaultScenario = function () {
        var transaction = [];
        transaction.push({ name: 'Step 1', responseTime: 100, thinkTime: 10 });
        transaction.push({ name: 'Step 2', responseTime: 100, thinkTime: 10 });
        transaction.push({ name: 'Step 3', responseTime: 100, thinkTime: 10 });
        transaction.push({ name: 'Step 4', responseTime: 100, thinkTime: 10 });
        transaction.push({ name: 'Step 5', responseTime: 100, thinkTime: 10 });
        transaction.push({ name: 'Step 6', responseTime: 100, thinkTime: 10 });
        var scenario = { name: 'Scenario ' + (this.threadGroups.length + 1), responseTime: 700, pacing: 200, steps: transaction };
        return scenario;
    };
    UserConfigurationComponent.prototype.rePaint = function () {
        this.dataSource.data = this.threadGroups;
        this.selection.clear();
        // calculate the total values for display
        this.transactionDetails = Object(__WEBPACK_IMPORTED_MODULE_6__user_configuration_functions__["a" /* getDataset */])(this.threadGroups, this.graphSettings);
        this.totalvUsers = this.transactionDetails.totalVusers;
        this.exeDuration = this.transactionDetails.totalDuration;
        this.iteration = this.transactionDetails.totalIteration;
    };
    UserConfigurationComponent.prototype.onAddScenario = function () {
        this.threadGroups.push({ threads: 10, delay: 10, startup: 10, hold: 3600, shutdown: 10, scenario: this.defaultScenario() });
        this.rePaint();
    };
    UserConfigurationComponent.prototype.onDeleteScenario = function () {
        var _this = this;
        this.selection.selected.forEach(function (element) { return _this.threadGroups = _this.threadGroups.filter(function (item) { return item !== element; }); });
        this.rePaint();
    };
    UserConfigurationComponent.prototype.onAddStep = function (element, index) {
        var newStep = { name: 'Step ' + (element.scenario.steps.length + 1), responseTime: 5, thinkTime: 5 };
        element.scenario.steps.splice(index + 1, 0, newStep);
        this.snackBar.open('Step added successfully!', 'Okay', { duration: 10000, });
    };
    UserConfigurationComponent.prototype.onRemoveStep = function (element, index) {
        if (element.scenario.steps.length === 1) {
            this.snackBar.open('Step not removed. Atleast one required!', 'Okay', { duration: 10000, panelClass: 'warning' });
            return;
        }
        // show confirmation dialog
        element.scenario.steps.splice(index, 1);
        this.snackBar.open('Step removed successfully!', 'Okay', { duration: 10000, });
    };
    UserConfigurationComponent.prototype.onSimulate = function () {
        this.panelOpenState = this.graphSettings.isOpenConfigPanel;
        this.rePaint();
        this.simulateEvent.emit({ data: this.transactionDetails, settings: this.graphSettings });
    };
    /** Whether the number of selected elements matches the total number of rows. */
    UserConfigurationComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    UserConfigurationComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    UserConfigurationComponent.prototype.onPreference = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__graph_settings_graph_settings_component__["a" /* GraphSettingsComponent */], { width: '400px', data: this.graphSettings, disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) { _this.graphSettings = result; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], UserConfigurationComponent.prototype, "simulateEvent", void 0);
    UserConfigurationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-configuration',
            template: __webpack_require__("../../../../../src/app/activity-graph/user-configuration/user-configuration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activity-graph/user-configuration/user-configuration.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* trigger */])('detailExpand', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('collapsed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ height: '0px', minHeight: '0', visibility: 'hidden' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* style */])({ height: '*', visibility: 'visible' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* transition */])('expanded <=> collapsed', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__["DragulaService"], __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]])
    ], UserConfigurationComponent);
    return UserConfigurationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/activity-graph/user-configuration/user-configuration.functions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDataset;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_duration_format__ = __webpack_require__("../../../../moment-duration-format/lib/moment-duration-format.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_duration_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment_duration_format__);


function getDataset(threads, settings) {
    var totalUser = getTotalUsers(threads);
    var totalDuration = getTotalDuration(threads);
    var transactionActivity = getTransactionActivity(threads);
    if (settings.isSimulateSteps) {
        var stepActivity = getStepActivity(threads);
        return {
            totalVusers: totalUser, totalDuration: totalDuration.displayString,
            totalIteration: transactionActivity.totalIteration, activites: transactionActivity.activities,
            setpActivities: stepActivity.activities
        };
    }
    else {
        return {
            totalVusers: totalUser, totalDuration: totalDuration.displayString,
            totalIteration: transactionActivity.totalIteration, activites: transactionActivity.activities
        };
    }
}
function getStepActivity(threads) {
    var dataset = [];
    var rampup = 0;
    var rampdown = 0;
    var currentUser = 1;
    var runDuration = 0;
    var init = 0;
    var activeDuration = 0;
    var runTracker;
    var momentToday = __WEBPACK_IMPORTED_MODULE_0_moment__().startOf('day');
    threads.forEach(function (obj, key) {
        var activityDuration = getResponseTime(obj.scenario.steps);
        rampup = obj.startup / obj.threads > 1 ? obj.startup / obj.threads : 1;
        rampdown = obj.shutdown / obj.threads > 1 ? obj.shutdown / obj.threads : 1;
        for (var ct = 0; ct < obj.threads; ct++) {
            var item = { measure: 'VU ' + currentUser, data: [] };
            init = runDuration = obj.delay + (rampup * ct);
            activeDuration = obj.hold + (obj.startup - (rampup * ct)) + (obj.shutdown - (rampdown * ct));
            runTracker = momentToday.clone().add(runDuration, 's');
            while (true) {
                for (var _i = 0, _a = obj.scenario.steps; _i < _a.length; _i++) {
                    var step = _a[_i];
                    // add step activity
                    var activity = [];
                    activity.push(runTracker.format('YYYY-MM-DD HH:mm:ss'));
                    activity.push(step.name);
                    if ((runDuration + step.responseTime) > (activeDuration + init)) {
                        runTracker.add((activeDuration + init) - runDuration, 's');
                    }
                    else {
                        runTracker.add(step.responseTime, 's');
                    }
                    runDuration += step.responseTime;
                    activity.push(runTracker.format('YYYY-MM-DD HH:mm:ss'));
                    item.data.push(activity);
                    if (runDuration > (activeDuration + init)) {
                        break;
                    }
                    // add pacing
                    var thinkTime = [];
                    thinkTime.push(runTracker.format('YYYY-MM-DD HH:mm:ss'));
                    thinkTime.push('Think Time');
                    if ((runDuration + step.thinkTime) > (activeDuration + init)) {
                        runTracker.add((activeDuration + init) - runDuration, 's');
                    }
                    else {
                        runTracker.add(step.thinkTime, 's');
                    }
                    runDuration += step.thinkTime;
                    thinkTime.push(runTracker.format('YYYY-MM-DD HH:mm:ss'));
                    item.data.push(thinkTime);
                    if (runDuration > (activeDuration + init)) {
                        break;
                    }
                }
                if (runDuration > (activeDuration + init)) {
                    break;
                }
                // add pacing
                var pause = [];
                pause.push(runTracker.format('YYYY-MM-DD HH:mm:ss'));
                pause.push('Pacing');
                if ((runDuration + obj.scenario.pacing) > (activeDuration + init)) {
                    runTracker.add((activeDuration + init) - runDuration, 's');
                }
                else {
                    runTracker.add(obj.scenario.pacing, 's');
                }
                runDuration += obj.scenario.pacing;
                pause.push(runTracker.format('YYYY-MM-DD HH:mm:ss'));
                item.data.push(pause);
                if (runDuration > (activeDuration + init)) {
                    break;
                }
            }
            currentUser++;
            dataset.push(item);
        }
    });
    dataset.reverse();
    // console.log(dataset);
    return { activities: dataset };
}
function getTransactionActivity(threads) {
    var dataset = [];
    var totalRecords = 0;
    var rampup = 0;
    var rampdown = 0;
    var currentUser = 1;
    var runDuration = 0;
    var init = 0;
    var activeDuration = 0;
    var runTracker;
    var momentToday = __WEBPACK_IMPORTED_MODULE_0_moment__().startOf('day');
    threads.forEach(function (obj, key) {
        var activityDuration = getResponseTime(obj.scenario.steps);
        rampup = obj.startup / obj.threads > 1 ? obj.startup / obj.threads : 1;
        rampdown = obj.shutdown / obj.threads > 1 ? obj.shutdown / obj.threads : 1;
        for (var ct = 0; ct < obj.threads; ct++) {
            var item = { measure: 'VU ' + currentUser, data: [] };
            init = runDuration = obj.delay + (rampup * ct);
            activeDuration = obj.hold + (obj.startup - (rampup * ct)) + (obj.shutdown - (rampdown * ct));
            runTracker = momentToday.clone().add(runDuration, 's');
            while (true) {
                // add activity
                var activity = [];
                activity.push(runTracker.format('YYYY-MM-DD HH:mm:ss'));
                activity.push(1);
                if ((runDuration + activityDuration) > (activeDuration + init)) {
                    runTracker.add((activeDuration + init) - runDuration, 's');
                }
                else {
                    runTracker.add(activityDuration, 's');
                    totalRecords++;
                }
                runDuration += activityDuration;
                activity.push(runTracker.format('YYYY-MM-DD HH:mm:ss'));
                item.data.push(activity);
                if (runDuration > (activeDuration + init)) {
                    break;
                }
                // add pause
                var pause = [];
                pause.push(runTracker.format('YYYY-MM-DD HH:mm:ss'));
                pause.push(0);
                if ((runDuration + obj.scenario.pacing) > (activeDuration + init)) {
                    runTracker.add((activeDuration + init) - runDuration, 's');
                }
                else {
                    runTracker.add(obj.scenario.pacing, 's');
                }
                runDuration += obj.scenario.pacing;
                pause.push(runTracker.format('YYYY-MM-DD HH:mm:ss'));
                item.data.push(pause);
                if (runDuration > (activeDuration + init)) {
                    break;
                }
            }
            currentUser++;
            dataset.push(item);
        }
    });
    dataset.reverse();
    // console.log(dataset);
    return { activities: dataset, totalIteration: totalRecords };
}
function getTotalUsers(threads) {
    var totalvUsers = 0;
    threads.forEach(function (element) {
        totalvUsers += element.threads;
    });
    return totalvUsers;
}
function getTotalDuration(threads) {
    var totalDuration = 0;
    threads.forEach(function (e) {
        var tempDuration = (e.startup + e.delay + e.hold + e.shutdown);
        totalDuration += (tempDuration > totalDuration) ? tempDuration - totalDuration : 0;
    });
    return { displayString: __WEBPACK_IMPORTED_MODULE_0_moment__["duration"](totalDuration, 'seconds').format('D[day] HH:mm:ss'), durationSec: totalDuration };
}
function getResponseTime(steps) {
    var totalResponseTime = 0;
    steps.forEach(function (e) { return totalResponseTime += (e.responseTime + e.thinkTime); });
    return totalResponseTime;
}


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-activity-graph></app-activity-graph>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_ng2_service__ = __webpack_require__("../../../../d3-ng2-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_electron__ = __webpack_require__("../../../../ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__activity_graph_user_configuration_user_configuration_component__ = __webpack_require__("../../../../../src/app/activity-graph/user-configuration/user-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activity_graph_activity_graph_component__ = __webpack_require__("../../../../../src/app/activity-graph/activity-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__d3_demo_drag_zoom_2_component__ = __webpack_require__("../../../../../src/app/d3-demo/drag-zoom-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_cdk_detail_row_directive__ = __webpack_require__("../../../../../src/app/shared/cdk-detail-row.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__activity_graph_graph_settings_graph_settings_component__ = __webpack_require__("../../../../../src/app/activity-graph/graph-settings/graph-settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__activity_graph_user_configuration_user_configuration_component__["a" /* UserConfigurationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__activity_graph_activity_graph_component__["a" /* ActivityGraphComponent */],
                __WEBPACK_IMPORTED_MODULE_9__d3_demo_drag_zoom_2_component__["a" /* DragZoom2Component */],
                __WEBPACK_IMPORTED_MODULE_10__shared_cdk_detail_row_directive__["a" /* CdkDetailRowDirective */],
                __WEBPACK_IMPORTED_MODULE_11__activity_graph_graph_settings_graph_settings_component__["a" /* GraphSettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_electron__["a" /* NgxElectronModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__activity_graph_graph_settings_graph_settings_component__["a" /* GraphSettingsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3_d3_ng2_service__["a" /* D3Service */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/d3-demo/drag-zoom-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragZoom2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__("../../../../d3-ng2-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/**
 * This component is an adaptation of the "Drag & Zoom II" Example provided by
 * Mike Bostock at https://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084
 *
 * The implementation has been modified to illustrate the use of inputs to control
 * the layout of the D3 visualization.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DragZoom2Component = (function () {
    function DragZoom2Component(element, d3Service) {
        this.width = 1040;
        this.height = 400;
        this.phylloRadius = 7;
        this.pointRadius = 2;
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
    }
    DragZoom2Component.prototype.ngOnChanges = function (changes) {
        if ((changes['width'] && !changes['width'].isFirstChange()) ||
            (changes['height'] && !changes['height'].isFirstChange()) ||
            (changes['phylloRadius'] && !changes['phylloRadius'].isFirstChange()) ||
            (changes['pointRadius'] && !changes['pointRadius'].isFirstChange())) {
            if (this.d3Svg.empty && !this.d3Svg.empty()) {
                this.changeLayout();
            }
        }
    };
    DragZoom2Component.prototype.ngOnDestroy = function () {
        if (this.d3Svg.empty && !this.d3Svg.empty()) {
            this.d3Svg.selectAll('*').remove();
        }
    };
    DragZoom2Component.prototype.ngOnInit = function () {
        var d3 = this.d3;
        var d3ParentElement;
        var d3G;
        function zoomed() {
            var e = d3.event;
            d3G.attr('transform', e.transform.toString());
        }
        function dragged(d) {
            var e = d3.event;
            d3.select(this).attr('cx', d.x = e.x).attr('cy', d.y = e.y);
        }
        if (this.parentNativeElement !== null) {
            d3ParentElement = d3.select(this.parentNativeElement);
            this.d3Svg = d3ParentElement.select('svg');
            this.d3Svg.attr('width', this.width);
            this.d3Svg.attr('height', this.height);
            this.points = d3.range(2000).map(Object(__WEBPACK_IMPORTED_MODULE_2__shared__["a" /* phyllotaxis */])(this.width, this.height, this.phylloRadius));
            d3G = this.d3G = this.d3Svg.append('g');
            this.d3G.selectAll('circle')
                .data(this.points)
                .enter().append('circle')
                .attr('cx', function (d) { return d.x; })
                .attr('cy', function (d) { return d.y; })
                .attr('r', this.pointRadius)
                .call(d3.drag().on('drag', dragged));
            this.d3Svg.call(d3.zoom()
                .scaleExtent([1 / 2, 8])
                .on('zoom', zoomed));
        }
    };
    DragZoom2Component.prototype.changeLayout = function () {
        this.d3Svg
            .attr('width', this.width)
            .attr('height', this.height);
        this.points = this.d3.range(2000).map(Object(__WEBPACK_IMPORTED_MODULE_2__shared__["a" /* phyllotaxis */])(this.width, this.height, this.phylloRadius));
        this.d3G.selectAll('circle')
            .data(this.points)
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; })
            .attr('r', this.pointRadius);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DragZoom2Component.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DragZoom2Component.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DragZoom2Component.prototype, "phylloRadius", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DragZoom2Component.prototype, "pointRadius", void 0);
    DragZoom2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drag-zoom-2',
            template: '<svg></svg>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]])
    ], DragZoom2Component);
    return DragZoom2Component;
}());



/***/ }),

/***/ "../../../../../src/app/shared/cdk-detail-row.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdkDetailRowDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CdkDetailRowDirective = (function () {
    function CdkDetailRowDirective(vcRef) {
        this.vcRef = vcRef;
    }
    Object.defineProperty(CdkDetailRowDirective.prototype, "expended", {
        get: function () {
            return this.opened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDetailRowDirective.prototype, "cdkDetailRow", {
        set: function (value) {
            if (value !== this.row) {
                this.row = value;
                // this.render();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkDetailRowDirective.prototype, "template", {
        set: function (value) {
            if (value !== this.tRef) {
                this.tRef = value;
                // this.render();
            }
        },
        enumerable: true,
        configurable: true
    });
    CdkDetailRowDirective.prototype.onClick = function (e) {
        if (e.srcElement.title === 'expand') {
            this.toggle(e.srcElement);
        }
    };
    CdkDetailRowDirective.prototype.toggle = function (ele) {
        if (this.opened) {
            this.vcRef.clear();
            ele.setAttribute('style', 'transform: rotate(0deg);transform-origin: center; transition: transform .5s;');
        }
        else {
            this.render();
            ele.setAttribute('style', 'transform: rotate(-180deg);transform-origin: center; transition: transform .5s;');
        }
        this.opened = this.vcRef.length > 0;
    };
    CdkDetailRowDirective.prototype.render = function () {
        this.vcRef.clear();
        if (this.tRef && this.row) {
            this.vcRef.createEmbeddedView(this.tRef, { $implicit: this.row });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.expanded'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], CdkDetailRowDirective.prototype, "expended", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CdkDetailRowDirective.prototype, "cdkDetailRow", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cdkDetailRowTpl'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]])
    ], CdkDetailRowDirective.prototype, "template", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CdkDetailRowDirective.prototype, "onClick", null);
    CdkDetailRowDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[cdkDetailRow]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], CdkDetailRowDirective);
    return CdkDetailRowDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__phyllotaxis__ = __webpack_require__("../../../../../src/app/shared/phyllotaxis.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__phyllotaxis__["a"]; });



/***/ }),

/***/ "../../../../../src/app/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["J" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/phyllotaxis.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = phyllotaxis;
/**
 * A helper function to obtain a generator for a phyllotaxis layout of points
 */
function phyllotaxis(width, height, radius) {
    var theta = Math.PI * (3 - Math.sqrt(5));
    return function (i) {
        var r = radius * Math.sqrt(i), a = theta * i;
        return {
            x: width / 2 + r * Math.cos(a),
            y: height / 2 + r * Math.sin(a)
        };
    };
}


/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http_testing__ = __webpack_require__("../../../http/esm5/testing.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("../../../../../src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_http_testing__["a" /* MockBackend */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* BaseRequestOptions */]]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["b" /* NoopAnimationsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["b" /* NoopAnimationsModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map