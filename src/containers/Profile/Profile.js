import React, { Component } from 'react';
export default class Profile extends Component {
  render() {
    return (
      <>
        <section className="hero is-small is-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Profile</h1>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="columns">
              <div className="column is-3" style={{ marginTop: '3em' }}>
                <aside class="menu">
                  <p class="menu-label">General</p>
                  <ul class="menu-list">
                    <li>
                      <a className="is-active">Dashboard</a>
                    </li>
                    <li>
                      <a className="has-text-grey-lighter">Coming soon...</a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div className="column is-9" style={{ minHeight: '80vh' }}>
                <div className="columns">
                  <div className="column is-9">
                    <h2 className="title is-4">Profile name</h2>
                    <article className="message is-danger">
                      <div className="message-header">
                        <p>WIP</p>
                      </div>
                      <div className="message-body">
                        Current section is work in progress...
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
