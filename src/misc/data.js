
/**
 * @imports
 */
import _isString from '@webqit/util/js/isString.js';
import _isArray from '@webqit/util/js/isArray.js';
import _isObject from '@webqit/util/js/isObject.js';
import _isUndefined from '@webqit/util/js/isUndefined.js';
import _objFrom from '@webqit/util/obj/from.js';
import _each from '@webqit/util/obj/each.js';
import { getPlayUIStub, getEls } from '../util.js';

/**
 * Gets or sets custom data.
 *
 * @param Array|Element			els
 * @param string|array|object	requestOrPayload
 * @param mixed|void			val
 *
 * @return mixed
 */
export default function(els, requestOrPayload, val = null) {
	const _els = getEls.call(this, els);
	if (arguments.length === 1 || (
		arguments.length === 2 && (_isString(requestOrPayload) || _isArray(requestOrPayload))
	)) {
		const playUiStub = getPlayUIStub(_els[0]);
		if (!playUiStub.data) {
			playUiStub.data = {};
		}
		// ------------------
		// Retrieve single prop
		if (_isString(requestOrPayload)) {
			return playUiStub.data[requestOrPayload];
		}
		// ------------------
		// Retrieve all props
		if (arguments.length === 1) {
			requestOrPayload = Object.keys(playUiStub.data);
		}
		// ------------------
		// Retrieve listed props
		if (_isArray(requestOrPayload)) {
			var vals = {};
			requestOrPayload.forEach(key => {
				vals[key] = playUiStub.data[key];
			});
			return vals;
		}
	}

	var payload = requestOrPayload;
	if (!_isObject(requestOrPayload)) {
		payload = _objFrom(requestOrPayload, val);
	}
	_els.forEach(el => {
		const playUiStub = getPlayUIStub(el);
		if (!playUiStub.data) {
			playUiStub.data = {};
		}
		_each(payload, (key, val) => {
			// ------------------
			// Unset prop?
			if (_isUndefined(val)) {
				delete playUiStub.data[key];
			}
			// ------------------
			// Set prop
			else {
				playUiStub.data[key] = val;
			}
		});
	});

	return this;
}