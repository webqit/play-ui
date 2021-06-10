
/**
 * @imports
 */
import _isTypeObject from '@webqit/util/js/isTypeObject.js';
import _isFunction from '@webqit/util/js/isFunction.js';
import _getType from '@webqit/util/js/getType.js';

/**
 * Returns an subject's firebase.
 *
 * @param array|object	subject
 * @param string      	firebaseKey
 * @param object      	Base
 *
 * @return Firebase
 */
export default function(subject, firebaseKey, Base = null) {
    if (!_isTypeObject(subject)) {
        throw new Error('Object must be of type subject; "' + _getType(subject) + '" given!');
    }
    var firebase;
    if (!(firebase = subject[firebaseKey]) && Base) {
        firebase = new Base(subject);
        Object.defineProperty(subject, firebaseKey, {
            get:() => firebase,
            set:value => {
                if (value !== firebase) {
                    throw new Error('Attempt to overwrite the "' + firebaseKey + '" special property!');
                }
            },
            enumerable:false,
        });
    }
    return firebase;
};