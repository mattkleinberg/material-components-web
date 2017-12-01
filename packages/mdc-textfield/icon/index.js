/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import MDCComponent from '@material/base/component';

import MDCTextFieldIconAdapter from './adapter';
import MDCTextFieldIconFoundation from './foundation';

/**
 * @extends {MDCComponent<!MDCTextFieldIconFoundation>}
 * @final
 */
class MDCTextFieldIcon extends MDCComponent {
  /**
   * @param {!Element} root
   * @return {!MDCTextFieldIcon}
   */
  static attachTo(root) {
    return new MDCTextFieldIcon(root);
  }

  /**
   * @return {MDCTextFieldIconFoundation}
   */
  get foundation() {
    return this.foundation_;
  }

  /**
   * @return {!MDCTextFieldIconFoundation}
   */
  getDefaultFoundation() {
    return new MDCTextFieldIconFoundation(/** @type {!MDCTextFieldIconAdapter} */ (Object.assign({
      setAttr: (attr, value) => this.root_.setAttribute(attr, value),
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      notifyIconAction: () => this.emit(MDCTextFieldInputFoundation.strings.ICON_EVENT, {}),      
    })));
  }
}

export {MDCTextFieldIcon, MDCTextFieldIconFoundation};
