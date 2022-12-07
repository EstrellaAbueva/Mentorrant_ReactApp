import React from 'react';
import home from './assets/home.png';
import logo from './assets/Mentorrant Logo.png';
import postIt from './assets/post-it.png';
import ebooks from './assets/ebooks.png';
import match from './assets/match.png';
import settings from './assets/settings.png';
import user from './assets/user.png';
import payment from './assets/Payment.png';
import notification from './assets/Notification Bell.png';
import session from './assets/session.png';
import './Assets.css';

const HomeButton = () => {
  return (
    <div className="settings">
        <figure className="home_button">
            <img src={home} alt="home_button"  />
        </figure>
        <section className="dashboard">
            <figure>
                <img class = "main_logo" src={logo} alt = "logo" />
            </figure>
            <article className="dashboard_selection">
                <figure>
                    <img className="dashboard_icon" src= {postIt} alt="post-it" />
                </figure>
                <p>Placeholder Text</p>
            </article>
            <article class="dashboard_selection">
                <figure>
                    <img className="dashboard_icon" src={postIt} alt="post-it"/>
                </figure>
                <p>Placeholder Text</p>
            </article>
            <article class="dashboard_selection">
                <figure>
                    <img className="dashboard_icon" src={postIt} alt="post-it"/>
                </figure>
                <p>Placeholder Text</p>
            </article>
            <article class="dashboard_selection">
                <figure>
                    <img class="dashboard_icon" src={ebooks} alt="Electronic books"/>
                </figure>
                <p>Available Ebooks</p>
            </article>
            <article class="dashboard_selection">
                <figure>
                    <img class="dashboard_icon" src= {match} alt="Matching Individuals"/>
                </figure>
                <p>Match Mentor</p>
            </article>
            <article class="dashboard_selection">
                <figure>
                    <img class="dashboard_icon" src= {session} alt="Matching Individuals"/>
                </figure>
                <p>Match Mentor</p>
            </article>
            <article class="dashboard_selection">
                <figure>
                    <img class="dashboard_icon" src= {settings} alt="Settings Icon"/>
                </figure>
                <p>Settings</p>
            </article>
        </section>
        <section class="settings_panel">
            <figure>
                <img class="settings_logo" src={settings} alt="Settings Icon"/>
            </figure>
            <article class="settings_section">
                <figure>
                    <img class="setting_icons" src= {user} alt="user icon"/>
                </figure>
                <p class="section_title">ACCOUNT SETTINGS</p>
                <p>My Account</p>
                <p>Account Settings</p>
            </article>
            <article class="settings_section">
                <figure>
                    <img class="setting_icons" src= {payment} alt="Credit card"/>
                </figure>
                <p class="section_title">PAYMENT SETTINGS</p>
                <p>Subscription</p>
                <p>Billing</p>
                <p>Pricing</p>
            </article>
            <article class="settings_section last">
                <figure>
                    <img class="setting_icons" src= {notification} alt="Notification Bell"/>
                </figure>
                <p class="section_title">APP SETTINGS</p>
                <p>General</p>
                <p>Notifications</p>
            </article>
            <div class="logout_button">LOG OUT</div>
        </section>
        <div class="container"></div>
    </div>
  );
}

export default HomeButton;