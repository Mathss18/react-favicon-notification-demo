import { useFaviconNotification } from "react-favicon-notification";
import Highlight from "react-highlight";

export default function App() {
  const [config, setConfig] = useFaviconNotification();

  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1>
            <b>react-favicon-notification</b>
          </h1>
          <h4>Start editing to see some magic happen!</h4>
        </div>

        <div className="">
          <div className="row mt-4">
            <div className="col">
              <label>radius</label>
              <br />
              <button
                className="btn btn-danger"
                onClick={() =>
                  setConfig({ ...config, radius: config.radius - 1 })
                }
              >
                -
              </button>
              <button
                className="btn btn-primary"
                onClick={() =>
                  setConfig({ ...config, radius: config.radius + 1 })
                }
              >
                +
              </button>
            </div>

            <div className="col">
              <label>counter</label>
              <br />
              <button
                className="btn btn-danger"
                onClick={() =>
                  setConfig({ ...config, counter: config.counter - 1 })
                }
              >
                -
              </button>
              <button
                className="btn btn-primary"
                onClick={() =>
                  setConfig({ ...config, counter: config.counter + 1 })
                }
              >
                +
              </button>
            </div>

            <div className="col">
              <label>innerCircle</label>
              <br />
              <input
                className="form-check-input"
                name="innerCircle"
                type="checkbox"
                checked={config.innerCircle}
                onChange={() =>
                  setConfig({ ...config, innerCircle: !config.innerCircle })
                }
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <label>backgroundColor</label>
              <input
                className="form-control"
                name="backgroundColor"
                type="text"
                value={config.backgroundColor}
                onChange={(e) =>
                  setConfig({ ...config, backgroundColor: e.target.value })
                }
              />
            </div>

            <div className="col">
              <label>fontColor</label>
              <input
                className="form-control"
                name="fontColor"
                type="text"
                value={config.fontColor}
                onChange={(e) =>
                  setConfig({ ...config, fontColor: e.target.value })
                }
              />
            </div>

            <div className="col">
              <label>fontFamily</label>
              <input
                className="form-control"
                name="fontFamily"
                type="text"
                value={config.fontFamily}
                onChange={(e) =>
                  setConfig({ ...config, fontFamily: e.target.value })
                }
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <label>fontWeight</label>
              <input
                className="form-control"
                name="fontWeight"
                type="text"
                value={config.fontWeight}
                onChange={(e) =>
                  setConfig({ ...config, fontWeight: e.target.value })
                }
              />
            </div>

            <div className="col">
              <label>url</label>
              <input
                className="form-control"
                name="url"
                type="text"
                value={config.url}
                onChange={(e) => setConfig({ ...config, url: e.target.value })}
              />
            </div>

            <div className="col">
              <label>position</label>
              <select
                className="form-select"
                name="position"
                value={config.position}
                onChange={(e) =>
                  setConfig({ ...config, position: e.target.value })
                }
              >
                <option value="top-left">top-left</option>
                <option value="top-right">top-right</option>
                <option value="bottom-left">bottom-left</option>
                <option value="bottom-right">bottom-right</option>
                <option value="center">center</option>
              </select>
            </div>

            <div className="col">
              <label>show</label>
              <br />
              <input
                className="form-check-input"
                name="show"
                type="checkbox"
                checked={config.show}
                onChange={() => setConfig({ ...config, show: !config.show })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Highlight language="json">{JSON.stringify(config, null, 2)}</Highlight>
      </div>
    </>
  );
}
