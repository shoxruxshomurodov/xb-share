import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "../dropdown";
import { get, isEqual } from "lodash";
import { useTranslation } from "react-i18next";
import config from "../../config";
import { useSettingsStore } from "../../store";
import { langData } from "../../constants/lang";
import { ChevronDownIcon } from "@heroicons/react/outline";

const Styled = styled.div`
  .lang {
    display: flex;
    align-items: center;
    span {
      font-size: 16px;
      padding-top: 3px;
      margin-right: 5px;
      display: flex;
      align-items: center;
    }

    &-body {
      padding: 10px 15px;
      width: 50px !important;

      li {
        margin-bottom: 5px;
        display: flex;
        cursor: pointer;
        align-items: center;
        transition: 0.3s ease;
        &:hover {
          color: #2dc161;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .lang_image {
    width: 30px;
    margin-right: 4px;
  }
  .lang_icon {
    color: #333;
    width: 20px;
  }
`;

const Language = ({ ...rest }) => {
  const [close, setClose] = useState(false);

  const { t, i18n } = useTranslation();

  const setLang = useSettingsStore((state) => get(state, "setLang", () => {}));

  const lang = useSettingsStore((state) =>
    get(state, "lang", config.DEFAULT_APP_LANG)
  );

  const changeLang = (code = "ru") => {
    setLang(code);
    setClose(true);
    return i18n.changeLanguage(code);
  };

  return (
    <Styled {...rest}>
      <Dropdown
        isClose={close}
        button={
          <div onClick={() => setClose(false)} className={"lang"}>
            <span>
              <img
                className={"lang_image"}
                src={get(
                  langData.find((item) => isEqual(get(item, "code"), lang)),
                  "image"
                )}
                alt="country-flag"
              />
              {get(
                langData.find((item) => isEqual(get(item, "code"), lang)),
                "title"
              )}
            </span>
            <ChevronDownIcon className="lang_icon" />
          </div>
        }
      >
        {!close && (
          <ul className={"lang-body"}>
            {langData &&
              langData.map((item) => (
                <li
                  key={get(item, "code")}
                  onClick={() => changeLang(get(item, "code"))}
                >
                  <img
                    className={"lang_image"}
                    src={get(item, "image")}
                    alt="country-flag"
                  />
                  {get(item, "title")}
                </li>
              ))}
          </ul>
        )}
      </Dropdown>
    </Styled>
  );
};

export default Language;
