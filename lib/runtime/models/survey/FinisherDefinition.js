import cuid from 'cuid';
import { Record, List } from 'immutable';
import ValidationErrorDefinition from '../ValidationErrorDefinition';

export const FinisherDefinitionRecord = Record({
  _id: null,
  finishType: 'SCREEN',                                             // 終了タイプ。COMPLETEまたはSCREEN
  point: 0,                                                           // 付与するポイント
  html: 'ご回答ありがとうございました。<br/>またのご協力をお待ちしております。', // 画面に表示するHTML
});

/** Finisherの定義 */
export default class FinisherDefinition extends FinisherDefinitionRecord {
  static create() {
    return new FinisherDefinition({ _id: cuid() });
  }

  getId() {
    return this.get('_id');
  }

  getFinishType() {
    return this.get('finishType');
  }

  getPoint() {
    return this.get('point');
  }

  getHtml() {
    return this.get('html');
  }

  isComplete() {
    return this.get('finishType') === 'COMPLETE';
  }

  validate(survey) {
    let errors = List();
    const replacer = survey.getReplacer();
    const node = survey.findNodeFromRefId(this.getId());
    const outputDefinitions = survey.findPrecedingOutputDefinition(node.getId(), false);
    if (!replacer.validate(this.getHtml(), outputDefinitions)) errors = errors.push(ValidationErrorDefinition.createError('存在しない参照があります'));

    return errors;
  }

  // ------------------------- 更新系 -----------------------------
  /** finisherの属性の更新 */
  updateFinisherAttribute(attributeName, value, replacer) {
    return this.set(attributeName, replacer.no2Id(value));
  }
}
