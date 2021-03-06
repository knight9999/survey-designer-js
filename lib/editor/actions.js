import $ from 'jquery';
import * as C from '../constants/actions';
import { SURVEY_POSTED_FAILED, SURVEY_POSTED_SUCCESS, SURVEY_POSTING } from '../constants/states';

/** ******************** デザイン画面関連 **********************/
export function changeShowPane(paneName, show) {
  return { type: C.CHANGE_SHOW_PANE, paneName, show };
}
export function changeNodeDragging(dragging) {
  return { type: C.CHANGE_NODE_DRAGGING, dragging };
}
export function changePageEditorTab(eventKey) {
  return { type: C.CHANGE_PAGE_EDITOR_TAB, eventKey };
}

export function changeShowMenuConfig(showMenuConfig) {
  return { type: C.CHANGE_SHOW_MENU_CONFIG, showMenuConfig };
}

/** ******************** Flow関連 **********************/
export function selectNode(nodeId) {
  return { type: C.SELECT_NODE, from: C.FLOW, nodeId };
}
export function addNode(index, nodeType) {
  return { type: C.ADD_NODE, index, nodeType };
}
export function removeNode(nodeId) {
  return { type: C.REMOVE_NODE, nodeId };
}

/** ******************** survey関連 **********************/
export function loadSurvey(survey) {
  return { type: C.LOAD_SURVEY, survey };
}
export function changePanel(panel) {
  return { type: C.CHANGE_PANEL, panel };
}
export function changeSaveSurveyStatus(saveSurveyStatus) {
  return { type: C.CHANGE_SAVE_SURVEY_STATUS, saveSurveyStatus };
}
export function changeSurveyCssOption(cssOption) {
  return { type: C.CHANGE_SURVEY_CSS_URLS, cssOption };
}
export function changeSurveyAttribute(attributeName, value) {
  return { type: C.CHANGE_SURVEY_ATTRIBUTE, attributeName, value };
}

/** ******************** page, question関連 **********************/
export function changeCodemirror(yaml) {
  return { type: C.CHANGE_CODEMIRROR, yaml };
}
export function changePageAttribute(pageId, attributeName, value) {
  return { type: C.CHANGE_PAGE_ATTRIBUTE, pageId, attributeName, value };
}
export function changeBranchAttribute(branchId, attributeName, value) {
  return { type: C.CHANGE_BRANCH_ATTRIBUTE, branchId, attributeName, value };
}
export function changeLogicalVariable(pageId, logicalVariableId, logicalVariable) {
  return { type: C.CHANGE_LOGICAL_VARIABLE, pageId, logicalVariableId, logicalVariable };
}
export function changeQuestionAttribute(pageId, questionId, attributeName, value, subValue) {
  return { type: C.CHANGE_QUESTION_ATTRIBUTE, pageId, questionId, attributeName, value, subValue };
}
export function changeItemAttribute(pageId, questionId, itemId, attributeName, value) {
  return { type: C.CHANGE_ITEM_ATTRIBUTE, pageId, questionId, itemId, attributeName, value };
}
export function changeSubItemAttribute(pageId, questionId, itemId, attributeName, value) {
  return { type: C.CHANGE_SUB_ITEM_ATTRIBUTE, pageId, questionId, itemId, attributeName, value };
}
export function copyNumberValidationRules(pageId, questionId, copyDataList) {
  return { type: C.COPY_NUMBER_VALIDATION_RULES, pageId, questionId, copyDataList };
}
export function addQuestion(questionClassName, pageId, index) {
  return { type: C.ADD_QUESTION, questionClassName, pageId, index };
}
export function addCondition(branchId, index) {
  return { type: C.ADD_CONDITION, branchId, index };
}
export function addItem(pageId, questionId, index) {
  return { type: C.ADD_ITEM, pageId, questionId, index };
}
export function bulkAddItems(pageId, questionId, text) {
  return { type: C.BULK_ADD_ITEMS, pageId, questionId, text };
}
export function bulkAddSubItems(pageId, questionId, text) {
  return { type: C.BULK_ADD_SUB_ITEMS, pageId, questionId, text };
}
export function addSubItem(pageId, questionId, index) {
  return { type: C.ADD_SUB_ITEM, pageId, questionId, index };
}
export function addLogicalVariable(pageId) {
  return { type: C.ADD_LOGICAL_VARIABLE, pageId };
}
export function addChildCondition(branchId, conditionId, index) {
  return { type: C.ADD_CHILD_CONDITION, branchId, conditionId, index };
}
export function changeConditionAttribute(branchId, conditionId, attributeName, value) {
  return { type: C.CHANGE_CONDITION_ATTRIBUTE, branchId, conditionId, attributeName, value };
}
export function changeChildConditionAttribute(branchId, conditionId, childConditionId, attributeName, value) {
  return { type: C.CHANGE_CHILD_CONDITION_ATTRIBUTE, branchId, conditionId, childConditionId, attributeName, value };
}
export function changeFinisherAttribute(finisherId, attributeName, value) {
  return { type: C.CHANGE_FINISHER_ATTRIBUTE, finisherId, attributeName, value };
}
export function changeItemVisibilityConditions(pageId, questionId, value) {
  return { type: C.CHANGE_ITEM_VISIBILITY_CONDITIONS, pageId, questionId, value };
}
export function changeNumberValidationRule(pageId, questionId, outputDefinitionId, numberValidationRule) {
  return { type: C.CHANGE_NUMBER_VALIDATION_RULE, pageId, questionId, outputDefinitionId, numberValidationRule };
}
export function changeSubItemVisibilityConditions(pageId, questionId, value) {
  return { type: C.CHANGE_SUB_ITEM_VISIBILITY_CONDITIONS, pageId, questionId, value };
}
export function removeChildCondition(branchId, conditionId, childConditionId) {
  return { type: C.REMOVE_CHILD_CONDITION, branchId, conditionId, childConditionId };
}
export function removeItem(pageId, questionId, itemId) {
  return { type: C.REMOVE_ITEM, pageId, questionId, itemId };
}
export function removeSubItem(pageId, questionId, itemId) {
  return { type: C.REMOVE_SUB_ITEM, pageId, questionId, itemId };
}
export function removeLogicalVariable(pageId, logicalVariableId) {
  return { type: C.REMOVE_LOGICAL_VARIABLE, pageId, logicalVariableId };
}
export function removeQuestion(pageId, questionId) {
  return { type: C.REMOVE_QUESTION, pageId, questionId };
}
export function removeCondition(branchId, conditionId) {
  return { type: C.REMOVE_CONDITION, branchId, conditionId };
}
export function swapItem(pageId, questionId, srcItemId, destItemId) {
  return { type: C.SWAP_ITEM, pageId, questionId, srcItemId, destItemId };
}
export function swapSubItem(pageId, questionId, srcItemId, destItemId) {
  return { type: C.SWAP_SUB_ITEM, pageId, questionId, srcItemId, destItemId };
}
export function swapNode(srcNodeId, destNodeId) {
  return { type: C.SWAP_NODE, srcNodeId, destNodeId };
}
export function swapQuestion(pageId, srcQuestionId, destQuestionId) {
  return { type: C.SWAP_QUESTION, pageId, srcQuestionId, destQuestionId };
}

/** ******************** branch関連 **********************/
export function changeBranch(branchId, branch) {
  return { type: C.CHANGE_BRANCH, branchId, branch };
}
export function swapCondition(branchId, srcConditionId, destConditionId) {
  return { type: C.SWAP_CONDITION, branchId, srcConditionId, destConditionId };
}

/** ************** 非同期 ******************/
export function saveSurvey(dispatch, saveSurveyUrl, survey) {
  $.ajax({
    url: saveSurveyUrl,
    method: 'POST',
    data: {
      _doc: survey.toJson(),
      output_definitions: survey.getOutputDefinitionsJson(),
    },
    dataType: 'json',
    timeout: 3000,
  }).done(() => {
    dispatch(changeSaveSurveyStatus(SURVEY_POSTED_SUCCESS));
  }).fail(() => {
    alert('アンケートの保存に失敗しました。ブラウザを再読込し再度アクセスください。');
    dispatch(changeSaveSurveyStatus(SURVEY_POSTED_FAILED));
  });
  dispatch(changeSaveSurveyStatus(SURVEY_POSTING));
}

/** ******************** 全てのJSを編集関連 **********************/
export function changeShowAllJavaScriptEditor(show) {
  return { type: C.CHANGE_ALL_JAVASCRIPT_EDITOR, show };
}

export function saveAllJavaScript(allJavaScriptCode) {
  return { type: C.CHANGE_ALL_JAVASCRIPT_CODE, allJavaScriptCode };
}

export function saveSavedAtOnAllJavaScript(savedAt) {
  return { type: C.CHANGE_ALL_JAVASCRIPT_SAVED_AT, savedAt };
}
