import "./Keywords.css";

function fixKeywordList(keywords, selected) {
  if (!selected.id) {
    return keywords;
  }

  const found = keywords.find((keyword) => keyword.id === selected.id);

  if (found) {
    return keywords;
  } else {
    return [selected, ...keywords];
  }
}

export default function Keywords({
  keywords,
  selectedKeyword,
  handleKeywordSelect,
}) {
  const fixedKeywordList = fixKeywordList(keywords, selectedKeyword);
  console.log({ keywords, fixedKeywordList });
  return fixedKeywordList ? (
    <ul className="keywords inline">
      {fixedKeywordList.map((keyword) => (
        <li
          key={keyword.id}
          className={`${selectedKeyword.id === keyword.id ? "active" : ""}`}
        >
          <button type="button" onClick={() => handleKeywordSelect(keyword)}>
            {keyword.stem}
          </button>
        </li>
      ))}
    </ul>
  ) : (
    ""
  );
}
