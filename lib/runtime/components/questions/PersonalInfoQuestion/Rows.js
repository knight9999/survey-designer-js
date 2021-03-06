/* eslint-env browser */
import React from 'react';
import classNames from 'classnames';
import PREFECTURES from '../../../../constants/prefectures';
import * as FIELDS from '../../../../constants/personalInfoFields';

function getOutputNo(survey, question, name) {
  return survey.findOutputNoFromName(question.getOutputName(name));
}

function isRowInvisible(item) {
  return item.getDisplayTypeId() === 'none';
}

const optionalLabel = <span className="question__personal-info__label_option">任意</span>;

export const AgeRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        <input
          type="text"
          pattern="\d*"
          maxLength="3"
          name={question.getOutputName(FIELDS.age)}
          className="question__personal-info__input-number"
          id={question.getOutputName(FIELDS.age)}
          data-output-no={getOutputNo(survey, question, FIELDS.age)}
          data-parsley-required
          data-parsley-positive-integer
        />
      </label>
    </td>
  </tr>);
};

export const BirthYearRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        <input
          type="text"
          pattern="\d*"
          maxLength="4"
          name={question.getOutputName(FIELDS.birthYear)}
          className="question__personal-info__input-number"
          id={question.getOutputName(FIELDS.birthYear)}
          data-output-no={getOutputNo(survey, question, FIELDS.birthYear)}
          data-parsley-required
          data-parsley-positive-integer
        />
      </label>
    </td>
  </tr>);
};

export const ContactEasyTimeRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        <input
          type="text"
          name={question.getOutputName(FIELDS.contactEasyTime)}
          id={question.getOutputName(FIELDS.contactEasyTime)}
          data-output-no={getOutputNo(survey, question, FIELDS.contactEasyTime)}
          data-parsley-required
        />
      </label>
    </td>
  </tr>);
};

export const ContactMeansRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label className="question__personal-info__label-inline">
        <span className="question__personal-info__choice">
          <input
            type="checkbox"
            name={question.getOutputName(FIELDS.contactMeansTel)}
            id={question.getOutputName(FIELDS.contactMeansTel)}
            data-output-no={getOutputNo(survey, question, FIELDS.contactMeansTel)}
            data-parsley-required
          /><span className="select-tool">電話</span>
        </span>
      </label>
      <label className="question__personal-info__label-inline">
        <span className="question__personal-info__choice">
          <input
            type="checkbox"
            name={question.getOutputName(FIELDS.contactMeansEmail)}
            id={question.getOutputName(FIELDS.contactMeansEmail)}
            data-output-no={getOutputNo(survey, question, FIELDS.contactMeansEmail)}
            data-parsley-required
          /><span className="select-tool">Eメール</span>
        </span>
      </label>
    </td>
  </tr>);
};

export const EmailRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        <input
          type="email"
          name={question.getOutputName(FIELDS.email)}
          id={question.getOutputName(FIELDS.email)}
          data-output-no={getOutputNo(survey, question, FIELDS.email)}
          data-parsley-required
        />
      </label>
    </td>
  </tr>);
};

export const FaxRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  let inputContent;
  switch (item.getDisplayTypeId()) {
    case '3input':
      inputContent = (
        <span>
          <input
            type="text"
            className="question__personal-info__3input"
            name={question.getOutputName(FIELDS.fax1)}
            id={question.getOutputName(FIELDS.fax1)}
            data-output-no={getOutputNo(survey, question, FIELDS.fax1)}
            pattern="\d+"
            data-parsley-pattern-message="正しいFAX番号を入力してください"
            data-parsley-required
          />
          <span className="question__personal-info__tel-splitter">
            -
          </span>
          <input
            type="text"
            className="question__personal-info__3input"
            name={question.getOutputName(FIELDS.fax2)}
            id={question.getOutputName(FIELDS.fax2)}
            data-output-no={getOutputNo(survey, question, FIELDS.fax2)}
            pattern="\d+"
            data-parsley-pattern-message="正しいFAX番号を入力してください"
            data-parsley-required
          />
          <span className="question__personal-info__tel-splitter">
            -
          </span>
          <input
            type="text"
            className="question__personal-info__3input"
            name={question.getOutputName(FIELDS.fax3)}
            id={question.getOutputName(FIELDS.fax3)}
            data-output-no={getOutputNo(survey, question, FIELDS.fax3)}
            pattern="\d+"
            data-parsley-pattern-message="正しいFAX番号を入力してください"
            data-parsley-required
          />
        </span>
      );
      break;
    default:
      inputContent = (<input
        type="text"
        className="js__personal-info__tel"
        name={question.getOutputName(FIELDS.fax)}
        id={question.getOutputName(FIELDS.fax)}
        data-output-no={getOutputNo(survey, question, FIELDS.fax)}
        data-parsley-pattern="\(?\d+\)?\-?\d+\-?\d+"
        data-parsley-pattern-message="正しいFAX番号を入力してください"
        data-parsley-required
      />);
  }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        {inputContent}
      </label>
    </td>
  </tr>);
};

export const FuriganaRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  let inputContent;
  switch (item.getDisplayTypeId()) {
    case '2input':
      inputContent = (
        <span>
          <span className="question__personal-info__2input__left">セイ：</span>
          <input
            type="text"
            name={question.getOutputName(FIELDS.furiganaFirst)}
            id={question.getOutputName(FIELDS.furiganaFirst)}
            data-output-no={getOutputNo(survey, question, FIELDS.furiganaFirst)}
            data-parsley-pattern="[ァ-ヶー～ 　]+"
            data-parsley-pattern-message="カタカナで入力してください"
            className="question__personal-info__2input"
            data-parsley-required
          />
          <span className="question__personal-info__2input__middle">メイ：</span>
          <input
            type="text"
            name={question.getOutputName(FIELDS.furiganaLast)}
            id={question.getOutputName(FIELDS.furiganaLast)}
            data-output-no={getOutputNo(survey, question, FIELDS.furiganaLast)}
            data-parsley-pattern="[ァ-ヶー～ 　]+"
            data-parsley-pattern-message="カタカナで入力してください"
            className="question__personal-info__2input"
            data-parsley-required
          />
        </span>);
      break;
    default:
      inputContent = (<input
        type="text"
        name={question.getOutputName(FIELDS.furigana)}
        id={question.getOutputName(FIELDS.furigana)}
        data-output-no={getOutputNo(survey, question, FIELDS.furigana)}
        data-parsley-required
        data-parsley-pattern="[ァ-ヶー～ 　]+"
        data-parsley-pattern-message="カタカナで入力してください"
      />);
  }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        {inputContent}
      </label>
    </td>
  </tr>);
};

export const HospitalNameRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        <input
          type="text"
          name={question.getOutputName(FIELDS.hospitalName)}
          id={question.getOutputName(FIELDS.hospitalName)}
          data-output-no={getOutputNo(survey, question, FIELDS.hospitalName)}
          data-parsley-required
        />
      </label>
    </td>
  </tr>);
};

export const HomeTelRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  let inputContent;
  switch (item.getDisplayTypeId()) {
    case '3input':
      inputContent = (
        <span>
          <input
            type="text"
            className="question__personal-info__3input"
            name={question.getOutputName(FIELDS.homeTel1)}
            id={question.getOutputName(FIELDS.homeTel1)}
            data-output-no={getOutputNo(survey, question, FIELDS.homeTel1)}
            pattern="\d+"
            data-parsley-pattern-message="正しい電話番号を入力してください"
            data-parsley-required
          />
          <span className="question__personal-info__tel-splitter">
            -
          </span>
          <input
            type="text"
            className="question__personal-info__3input"
            name={question.getOutputName(FIELDS.homeTel2)}
            id={question.getOutputName(FIELDS.homeTel2)}
            data-output-no={getOutputNo(survey, question, FIELDS.homeTel2)}
            pattern="\d+"
            data-parsley-pattern-message="正しい電話番号を入力してください"
            data-parsley-required
          />
          <span className="question__personal-info__tel-splitter">
            -
          </span>
          <input
            type="text"
            className="question__personal-info__3input"
            name={question.getOutputName(FIELDS.homeTel3)}
            id={question.getOutputName(FIELDS.homeTel3)}
            data-output-no={getOutputNo(survey, question, FIELDS.homeTel3)}
            pattern="\d+"
            data-parsley-pattern-message="正しい電話番号を入力してください"
            data-parsley-required
          />
        </span>
      );
      break;
    default:
      inputContent = (<input
        type="text"
        name={question.getOutputName(FIELDS.homeTel)}
        id={question.getOutputName(FIELDS.homeTel)}
        data-output-no={getOutputNo(survey, question, FIELDS.homeTel)}
        data-parsley-pattern="\(?\d+\)?\-?\d+\-?\d+"
        data-parsley-pattern-message="正しい電話番号を入力してください"
        data-parsley-required
      />);
  }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        {inputContent}
      </label>
    </td>
  </tr>);
};

export const HospitalPrefectureRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  let inputContent;
  switch (item.getDisplayTypeId()) {
    case 'select_input':
      inputContent = (<span>
        <select
          name={question.getOutputName(FIELDS.hospitalPrefecture)}
          id={question.getOutputName(FIELDS.hospitalPrefecture)}
          data-output-no={getOutputNo(survey, question, FIELDS.hospitalPrefecture)}
          className="question__personal-info__select"
          data-parsley-required
        >
          <option value="">▽</option>
          {PREFECTURES.map(p => <option key={`${question.getOutputName(FIELDS.hospitalPrefecture)}_${p}`} value={p}>{p}</option>)}
        </select>
        <span className="question__personal-info__2input__middle">市区町村：</span>
        <input
          type="text"
          name={question.getOutputName(FIELDS.hospitalPrefectureText)}
          id={question.getOutputName(FIELDS.hospitalPrefectureText)}
          data-output-no={getOutputNo(survey, question, FIELDS.hospitalPrefectureText)}
          className="question__personal-info__input_with_select"
          data-parsley-required
        />
      </span>);
      break;
    case 'input':
      inputContent = (
        <input
          type="text"
          name={question.getOutputName(FIELDS.hospitalPrefectureText)}
          id={question.getOutputName(FIELDS.hospitalPrefectureText)}
          data-output-no={getOutputNo(survey, question, FIELDS.hospitalPrefectureText)}
          data-parsley-required
        />
      );
      break;
    default:
      inputContent = (
        <select
          name={question.getOutputName(FIELDS.hospitalPrefecture)}
          id={question.getOutputName(FIELDS.hospitalPrefecture)}
          className="question__personal-info__select"
          data-output-no={getOutputNo(survey, question, FIELDS.hospitalPrefecture)}
          data-parsley-required
        >
          <option value="">▽</option>
          {PREFECTURES.map(p => <option key={`${question.getOutputName(FIELDS.hospitalPrefecture)}_${p}`} value={p}>{p}</option>)}
        </select>
      );
  }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      {inputContent}
    </td>
  </tr>);
};

export const InterviewPlaceRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        <input
          type="text"
          name={question.getOutputName(FIELDS.interviewPlace)}
          id={question.getOutputName(FIELDS.interviewPlace)}
          data-output-no={getOutputNo(survey, question, FIELDS.interviewPlace)}
          data-parsley-required
        />
      </label>
    </td>
  </tr>);
};

export const InterviewMeansRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label className="question__personal-info__label-inline">
        <span className="question__personal-info__choice">
          <input
            type="radio"
            name={question.getOutputName(FIELDS.interviewMeans)}
            id={question.getOutputName(FIELDS.interviewMeans)}
            data-output-no={getOutputNo(survey, question, FIELDS.interviewMeans)}
            data-parsley-required
          /><span className="select-tool">訪問</span>
        </span>
      </label>
      <label className="question__personal-info__label-inline">
        <span className="question__personal-info__choice">
          <input
            type="radio"
            name={question.getOutputName(FIELDS.interviewMeans)}
            id={question.getOutputName(FIELDS.interviewMeans)}
            data-output-no={getOutputNo(survey, question, FIELDS.interviewMeans)}
            data-parsley-required
          /><span className="select-tool">電話</span>
        </span>
      </label>
      <label className="question__personal-info__label-inline">
        <span className="question__personal-info__choice">
          <input
            type="radio"
            name={question.getOutputName(FIELDS.interviewMeans)}
            id={question.getOutputName(FIELDS.interviewMeans)}
            data-output-no={getOutputNo(survey, question, FIELDS.interviewMeans)}
            data-parsley-required
          /><span className="select-tool">どちらでも</span>
        </span>
      </label>
    </td>
  </tr>);
};

export const InterviewRow = (props) => {
  const { survey, question, item, mobileTel, homeTel, workTel } = props;
  if (isRowInvisible(item)) { return null; }

  const interviewContactCheckboxGroup = `${question.getId()}_interviewContact`;
  const interviewContactContainer = `${question.getId()}_interviewContactContainer`;

  const mobileContent = (!mobileTel.isDisable() && <label className="personalInfo-label">
    <input
      name={question.getOutputName(FIELDS.interviewContactMobileTel)}
      id={question.getOutputName(FIELDS.interviewContactMobileTel)}
      type="checkbox"
      value="1"
      data-output-no={getOutputNo(survey, question, FIELDS.interviewContactMobileTel)}
      data-parsley-class-handler={`#${interviewContactContainer}`}
      data-parsley-multiple={interviewContactCheckboxGroup}
      data-parsley-required
    />
    <span id={question.getCheckboxLabelIdByPropName(FIELDS.interviewContactMobileTel)} className={classNames('select-tool check-not-text', { disabled: mobileTel.isOptional() })}>
      {mobileTel.getLabel()}
    </span>
  </label>);

  const homeContent = (!homeTel.isDisable() && <label className="personalInfo-label">
    <input
      name={question.getOutputName(FIELDS.interviewContactHomeTel)}
      disabled={!homeTel.isDisable()}
      id={question.getOutputName(FIELDS.interviewContactHomeTel)}
      type="checkbox"
      value="1"
      data-output-no={getOutputNo(survey, question, FIELDS.interviewContactHomeTel)}
      data-parsley-class-handler={`#${interviewContactContainer}`}
      data-parsley-multiple={interviewContactCheckboxGroup}
      data-parsley-required
    />
    <span id={question.getCheckboxLabelIdByPropName(FIELDS.interviewContactHomeTel)} className={classNames('select-tool check-not-text', { disabled: homeTel.isOptional() })}>
      {homeTel.getLabel()}
    </span>
  </label>);

  const workContent = (!workTel.isDisable() && <label className="personalInfo-label">
    <input
      name={question.getOutputName(FIELDS.interviewContactWorkTel)}
      id={question.getOutputName(FIELDS.interviewContactWorkTel)}
      type="checkbox"
      value="1"
      data-output-no={getOutputNo(survey, question, FIELDS.interviewContactWorkTel)}
      data-parsley-class-handler={`#${interviewContactContainer}`}
      data-parsley-multiple={interviewContactCheckboxGroup}
      data-parsley-required
    />
    <span id={question.getCheckboxLabelIdByPropName(FIELDS.interviewContactWorkTel)} className={classNames('select-tool check-not-text', { disabled: workTel.isOptional() })}>
      {workTel.getLabel()}
    </span>
  </label>);

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <div id={interviewContactContainer}>
        ご都合のよろしいご連絡先<br />
        {mobileContent}
        {homeContent}
        {workContent}
      </div>
    </td>
  </tr>);
};

export const MobileTelRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  let inputContent;
  switch (item.getDisplayTypeId()) {
    case '3input':
      inputContent = (
        <span>
          <input
            type="text"
            className="question__personal-info__3input"
            name={question.getOutputName(FIELDS.mobileTel1)}
            id={question.getOutputName(FIELDS.mobileTel1)}
            data-output-no={getOutputNo(survey, question, FIELDS.mobileTel1)}
            pattern="\d+"
            data-parsley-pattern-message="正しい電話番号を入力してください"
            data-parsley-required
          />
          <span className="question__personal-info__tel-splitter">
            -
          </span>
          <input
            type="text"
            className="question__personal-info__3input"
            name={question.getOutputName(FIELDS.mobileTel2)}
            id={question.getOutputName(FIELDS.mobileTel2)}
            data-output-no={getOutputNo(survey, question, FIELDS.mobileTel2)}
            pattern="\d+"
            data-parsley-pattern-message="正しい電話番号を入力してください"
            data-parsley-required
          />
          <span className="question__personal-info__tel-splitter">
            -
          </span>
          <input
            type="text"
            className="question__personal-info__3input"
            name={question.getOutputName(FIELDS.mobileTel3)}
            id={question.getOutputName(FIELDS.mobileTel3)}
            data-output-no={getOutputNo(survey, question, FIELDS.mobileTel3)}
            pattern="\d+"
            data-parsley-pattern-message="正しい電話番号を入力してください"
            data-parsley-required
          />
        </span>
      );
      break;
    default:
      inputContent = (<input
        type="text"
        name={question.getOutputName(FIELDS.mobileTel)}
        id={question.getOutputName(FIELDS.mobileTel)}
        data-output-no={getOutputNo(survey, question, FIELDS.mobileTel)}
        data-parsley-pattern="\(?\d+\)?\-?\d+\-?\d+"
        data-parsley-pattern-message="正しい電話番号を入力してください"
        data-parsley-required
      />);
  }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        {inputContent}
      </label>
    </td>
  </tr>);
};

export const NameRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  let inputContent;
  switch (item.getDisplayTypeId()) {
    case '2input':
      inputContent = (
        <span>
          <span className="question__personal-info__2input__left">姓：</span>
          <input
            type="text"
            name={question.getOutputName(FIELDS.firstName)}
            id={question.getOutputName(FIELDS.firstName)}
            data-output-no={getOutputNo(survey, question, FIELDS.firstName)}
            className="question__personal-info__2input"
            data-parsley-required
          />
          <span className="question__personal-info__2input__middle">名：</span>
          <input
            type="text"
            name={question.getOutputName(FIELDS.lastName)}
            id={question.getOutputName(FIELDS.lastName)}
            data-output-no={getOutputNo(survey, question, FIELDS.lastName)}
            className="question__personal-info__2input"
            data-parsley-required
          />
        </span>
      );
      break;
    default:
      inputContent = (<input
        type="text"
        name={question.getOutputName(FIELDS.name)}
        id={question.getOutputName(FIELDS.name)}
        data-output-no={getOutputNo(survey, question, FIELDS.name)}
        data-parsley-required
      />);
  }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        {inputContent}
      </label>
    </td>
  </tr>);
};

export const PositionRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        <input
          type="text"
          name={question.getOutputName(FIELDS.position)}
          id={question.getOutputName(FIELDS.position)}
          data-output-no={getOutputNo(survey, question, FIELDS.position)}
          data-parsley-required
        />
      </label>
    </td>
  </tr>);
};

export const ProfessionalAreaRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        <input
          type="text"
          name={question.getOutputName(FIELDS.professionalArea)}
          id={question.getOutputName(FIELDS.professionalArea)}
          data-output-no={getOutputNo(survey, question, FIELDS.professionalArea)}
          data-parsley-required
        />
      </label>
    </td>
  </tr>);
};

export const RequestEtcRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        <input
          type="text"
          name={question.getOutputName(FIELDS.requestEtc)}
          id={question.getOutputName(FIELDS.requestEtc)}
          data-output-no={getOutputNo(survey, question, FIELDS.requestEtc)}
          data-parsley-required
        />
      </label>
    </td>
  </tr>);
};

export const ScheduleRow = (props) => {
  const { survey, question, item, mobileTel, homeTel, workTel, email } = props;
  if (isRowInvisible(item)) { return null; }

  const scheduleContactCheckboxGroup = `${question.getId()}_scheduleContact`;
  const scheduleContactContainer = `${question.getId()}_scheduleContactContainer`;

  const mobileContent = (!mobileTel.isDisable() && <label className="personalInfo-label">
    <input
      name={question.getOutputName(FIELDS.scheduleContactMobileTel)}
      id={question.getOutputName(FIELDS.scheduleContactMobileTel)}
      disabled={mobileTel.isOptional()}
      type="checkbox"
      value="1"
      data-output-no={getOutputNo(survey, question, FIELDS.scheduleContactMobileTel)}
      data-parsley-class-handler={`#${scheduleContactContainer}`}
      data-parsley-required
      data-parsley-multiple={scheduleContactCheckboxGroup}
    />
    <span id={question.getCheckboxLabelIdByPropName(FIELDS.scheduleContactMobileTel)} className={classNames('select-tool check-not-text', { disabled: mobileTel.isOptional() })}>
      {mobileTel.getLabel()}
    </span>
  </label>);

  const homeContent = (!homeTel.isDisable() && <label className="personalInfo-label">
    <input
      name={question.getOutputName(FIELDS.scheduleContactHomeTel)}
      id={question.getOutputName(FIELDS.scheduleContactHomeTel)}
      disabled={homeTel.isOptional()}
      type="checkbox"
      value="1"
      data-output-no={getOutputNo(survey, question, FIELDS.scheduleContactHomeTel)}
      data-parsley-class-handler={`#${scheduleContactContainer}`}
      data-parsley-multiple={scheduleContactCheckboxGroup}
      data-parsley-required
    />
    <span id={question.getCheckboxLabelIdByPropName(FIELDS.scheduleContactHomeTel)} className={classNames('select-tool check-not-text', { disabled: homeTel.isOptional() })}>
      {homeTel.getLabel()}
    </span>
  </label>);

  const workContent = (!workTel.isDisable() && <label className="personalInfo-label">
    <input
      name={question.getOutputName(FIELDS.scheduleContactWorkTel)}
      id={question.getOutputName(FIELDS.scheduleContactWorkTel)}
      disabled={workTel.isOptional()}
      type="checkbox"
      value="1"
      data-output-no={getOutputNo(survey, question, FIELDS.scheduleContactWorkTel)}
      data-parsley-class-handler={`#${scheduleContactContainer}`}
      data-parsley-multiple={scheduleContactCheckboxGroup}
      data-parsley-required
    />
    <span id={question.getCheckboxLabelIdByPropName(FIELDS.scheduleContactWorkTel)} className={classNames('select-tool check-not-text', { disabled: workTel.isOptional() })}>
      {workTel.getLabel()}
    </span>
  </label>);

  const emailContent = (!email.isDisable() && <label className="personalInfo-label">
    <input
      name={question.getOutputName(FIELDS.scheduleContactEmail)}
      id={question.getOutputName(FIELDS.scheduleContactEmail)}
      disabled={email.isOptional()}
      type="checkbox"
      value="1"
      data-output-no={getOutputNo(survey, question, FIELDS.scheduleContactEmail)}
      data-parsley-class-handler={`#${scheduleContactContainer}`}
      data-parsley-multiple={scheduleContactCheckboxGroup}
      data-parsley-required
    />
    <span id={question.getCheckboxLabelIdByPropName(FIELDS.scheduleContactEmail)} className={classNames('select-tool check-not-text', { disabled: email.isOptional() })}>
      {email.getLabel()}
    </span>
  </label>);

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <div id={scheduleContactContainer}>
        ご都合のよろしいご連絡先<br />
        <b>※可能であればお電話でもご連絡させていただきたく、電話番号のうち、出来るだけどちらか一つはお選びください。</b>
        {mobileContent}
        {homeContent}
        {workContent}
        {emailContent}
      </div>
      <div style={{ paddingTop: '1em' }}>
        ご連絡のつきやすい時間帯（平日）<br />
        <label>
          <input
            type="text"
            name={question.getOutputName(FIELDS.contactTimeWeekday)}
            id={question.getOutputName(FIELDS.contactTimeWeekday)}
            data-output-no={getOutputNo(survey, question, FIELDS.contactTimeWeekday)}
            data-parsley-required
          />
        </label>
      </div>
      <div style={{ paddingTop: '1em' }}>
        ご連絡のつきやすい時間帯（休日）<br />
        <label>
          <input
            type="text"
            name={question.getOutputName(FIELDS.contactTimeWeekend)}
            id={question.getOutputName(FIELDS.contactTimeWeekend)}
            data-output-no={getOutputNo(survey, question, FIELDS.contactTimeWeekend)}
            data-parsley-required
          />
          <span>※任意でご記入ください。</span>
        </label>
      </div>
    </td>
  </tr>);
};

export const SexRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <select
        name={question.getOutputName(FIELDS.sex)}
        id={question.getOutputName(FIELDS.sex)}
        style={{ width: '10em' }}
        data-output-no={getOutputNo(survey, question, FIELDS.sex)}
        data-parsley-required
      >
        <option value="">▽</option>
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </td>
  </tr>);
};

export const SpecialityRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        <input
          type="text"
          name={question.getOutputName(FIELDS.specialty)}
          id={question.getOutputName(FIELDS.specialty)}
          data-output-no={getOutputNo(survey, question, FIELDS.specialty)}
          data-parsley-required
        />
      </label>
    </td>
  </tr>);
};


export const WorkPostalCodeRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        <input
          type="text"
          name={question.getOutputName(FIELDS.workPostalCode)}
          id={question.getOutputName(FIELDS.workPostalCode)}
          data-output-no={getOutputNo(survey, question, FIELDS.workPostalCode)}
          data-parsley-required
        />
      </label>
    </td>
  </tr>);
};


export const WorkTelRow = (props) => {
  const { survey, question, item } = props;
  if (isRowInvisible(item)) { return null; }

  let inputContent;
  switch (item.getDisplayTypeId()) {
    case '3input':
      inputContent = (
        <span>
          <input
            type="text"
            className="question__personal-info__3input"
            name={question.getOutputName(FIELDS.workTel1)}
            id={question.getOutputName(FIELDS.workTel1)}
            data-output-no={getOutputNo(survey, question, FIELDS.workTel1)}
            pattern="\d+"
            data-parsley-pattern-message="正しい電話番号を入力してください"
            data-parsley-required
          />
          <span className="question__personal-info__tel-splitter">
            -
          </span>
          <input
            type="text"
            className="question__personal-info__3input"
            name={question.getOutputName(FIELDS.workTel2)}
            id={question.getOutputName(FIELDS.workTel2)}
            data-output-no={getOutputNo(survey, question, FIELDS.workTel2)}
            pattern="\d+"
            data-parsley-pattern-message="正しい電話番号を入力してください"
          />
          <span className="question__personal-info__tel-splitter">
            -
          </span>
          <input
            type="text"
            className="question__personal-info__3input"
            name={question.getOutputName(FIELDS.workTel3)}
            id={question.getOutputName(FIELDS.workTel3)}
            data-output-no={getOutputNo(survey, question, FIELDS.workTel3)}
            pattern="\d+"
            data-parsley-pattern-message="正しい電話番号を入力してください"
            data-parsley-required
          />
        </span>
      );
      break;
    default:
      inputContent = (<input
        type="text"
        name={question.getOutputName(FIELDS.workTel)}
        id={question.getOutputName(FIELDS.workTel)}
        data-output-no={getOutputNo(survey, question, FIELDS.workTel)}
        data-parsley-pattern="\(?\d+\)?\-?\d+\-?\d+"
        data-parsley-pattern-message="正しい電話番号を入力してください"
        data-parsley-required
      />);
  }

  return (<tr>
    <td>
      {item.getLabel()}
      {item.isOptional() && optionalLabel}
    </td>
    <td>
      <label>
        {inputContent}
      </label>
    </td>
  </tr>);
};

