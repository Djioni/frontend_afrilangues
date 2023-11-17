import React from "react";
import { useSelector } from "react-redux";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another

export default function ExerciseDataNotValid() {
  const { title, id, type, error, data } = useSelector(
    (state) => state.ExerciseDataNotValid
  );
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return (
    <div className="container my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Exercise Information</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>ID:</strong> {id}
            </li>
            <li className="list-group-item">
              <strong>Title:</strong> {title}
            </li>
            <li className="list-group-item">
              <strong>Type:</strong> {type}
            </li>
          </ul>

          <div className="alert alert-danger mt-3" role="alert">
            <strong>Error:</strong> {error}
          </div>

          <Editor
            value={data.split(",").join("\n")}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 13,
            }}
          />
        </div>
      </div>
    </div>
  );
}
